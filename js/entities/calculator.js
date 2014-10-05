/*jshint devel:true */
/*global define */

define(["app", "utils/utility"], function(FreeholdApp){

	FreeholdApp.module("Entities", function(Entities, FreeholdApp, Backbone, Marionette, $, _) {

		var utility = {
			currentYear: ((new Date()).getFullYear()),
			generateAggregates: function(collection, year) {
				return _.reduce(collection, function(stats, value) { 
		      		return {
		      			totalInterest: stats.totalInterest + value.get("interestPaid"),
		      			totalPrincipal: stats.totalPrincipal + value.get("principalPaid"),
		      			totalPrincipalLeft: (year && (value.get("year") >= year)) ? (stats.totalPrincipalLeft + value.get("principalPaid")) : stats.totalPrincipalLeft
		      		};
		      	}, 
	      		{totalInterest: 0, totalPrincipal: 0, totalPrincipalLeft: 0});
			},
			fillArrayWithMonths: function(year, count, offset, fillWith) {
				return _.map(Array.apply(null, new Array(count)), 
			      		function(x, i) {
			      			return new fillWith({
			      					date: new Date(year, (i+offset), 1),
			      					month: window.utility.toMonth(i+offset), 
			      					year: year
			      				});
		      		});
			},
			monthFill: function(year, arr, fillWith) {
		      if (arr.length >= 12)
		        return arr.slice(0,12);
		      var fillCount = 12 - arr.length;
		      
		      var fillArray = null;
		      if (year === this.currentYear) {
	      		fillArray = this.fillArrayWithMonths(year, fillCount, 0, fillWith);
		        return fillArray.concat(arr);
		      } else {
		      	fillArray = this.fillArrayWithMonths(year, fillCount, arr.length, fillWith);
		        return arr.concat(fillArray);
	    	  }
		    }
		};

		Entities.Installment = Backbone.Model.extend({
			defaults: {
				interestPaid: 0,
				principalPaid: 0,
				principalLeft: 0,
				month: null,
				year: 0,
				date: null
			}
		});

		Entities.InstallmentCollection = Backbone.Collection.extend({
	      model: Entities.Installment,
	      comparator: "date",

	      byYear: function(year) {
	      	var filtered = this.filter(function(installment) {
	      		return installment.get("date").getFullYear() === year;
	      	});
	      	return new Entities.InstallmentCollection(filtered);
	      },

	      totalAggs: function(year) {
		      return utility.generateAggregates(this.models, year);
	      },

	      yearAggs: function(year) {
	      	var yearlyInstallments = this.byYear(year);
	      	return utility.generateAggregates(yearlyInstallments.models);
	      },

	      generateState: function(year) {
	      	var totalAggs = this.totalAggs(year);
	      	var yearlyInstallments = this.byYear(year);
	      	var yearAggs = utility.generateAggregates(yearlyInstallments.models);

	      	return {
	      		year: year,
	      		totalPrincipal: totalAggs.totalPrincipal,
	      		totalInterest: totalAggs.totalInterest,
	      		yearlyPrincipal: yearAggs.totalPrincipal,
	      		yearlyInterest: yearAggs.totalInterest,
	      		totalPrincipalLeft: totalAggs.totalPrincipalLeft,
	      		yearlyInstallments: new Entities.InstallmentCollection(utility.monthFill(year, yearlyInstallments.models, Entities.Installment))
	      	};
	      }
	    });

		var installments = [];
		var defer = null;

	    var API = {
	    	calculateInstallments: function(loanDetails) {
				var currentDate = new Date();
				currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
				currentDate = currentDate.addMonths(1);

				var interest = loanDetails.get("interest");
				var termPeriod = loanDetails.get("termPeriod");
				var amount = loanDetails.get("amount");
				var deposit = loanDetails.get("deposit");
				var term = loanDetails.get("term");
				var repayments = loanDetails.get("repayments");

				var effectiveInterest = ((interest/100)/termPeriod);
				var principalLeft = amount - deposit;

				for(var i = 0; i < (termPeriod*term); i++) {
					var interestPaid = principalLeft*effectiveInterest;
				    var principalPaid = (principalLeft > (repayments - interestPaid)) ? (repayments - interestPaid) : principalLeft;
				    principalLeft = principalLeft - principalPaid;

				    var installmentDate = currentDate.addMonths(i);
				    installments.add({
				    	interestPaid: interestPaid,
						principalPaid: principalPaid,
						principalLeft: principalLeft,
						month: installmentDate.getMonthName(),
						year: installmentDate.getFullYear(),
						date: installmentDate
				    });
				    if (principalLeft <= 0) break;
				}
				defer.resolve(installments);
	    	}
	    };

	    FreeholdApp.commands.setHandler("calculator:installments:calculate", function(details) {
	    	installments = new Entities.InstallmentCollection();
	    	defer = $.Deferred();
	    	API.calculateInstallments(details);
	    });

	    FreeholdApp.reqres.setHandler("calculator:installments:fetch", function() {
	    	var promise = defer.promise();
	    	return promise;
	    });

	});

	return FreeholdApp.Entities;

});