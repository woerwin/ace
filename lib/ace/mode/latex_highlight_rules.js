define(function(require, exports, module) {
"use strict";

var oop = require("../lib/oop");
var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;

// used by rdoc
var latexKeywords = exports.latexKeywords = "\\\\(?:documentclass|usepackage|newcounter|setcounter|addtocounter|value|arabic|stepcounter|newenvironment|renewenvironment|ref|vref|eqref|pageref|label|cite[a-zA-Z]*|tag|begin|end|bibitem)\\b";

var LatexHighlightRules = function() {   
    this.$rules = {
        "start" : [
            {
                token : "comment",
                regex : "%.*$"
            }, {
                token : "text", // non-command
                regex : "\\\\[$&%#\\{\\}]"
            }, {
                token : "keyword", // command
                regex : latexKeywords
            }, {
                token : "keyword", // command
                regex : "\\\\(?:[a-zA-z0-9]+|[^a-zA-z0-9])"
            }, {
                token : ["support.function.general", "punctuation.brace"], // command
                regex : "(\\\\[A-Za-z@]+)({)"
            }, {
                // Obviously these are neither keywords nor operators, but
                // labelling them as such was the easiest way to get them
                // to be colored distinctly from regular text
                token : "paren.keyword.operator",
                regex : "[[({]"
            }, {
                // Obviously these are neither keywords nor operators, but
                // labelling them as such was the easiest way to get them
                // to be colored distinctly from regular text
                token : "paren.keyword.operator",
                regex : "[\\])}]"
            }, {
                token : "text",
                regex : "\\s+"
            }
        ]
    };
};

oop.inherits(LatexHighlightRules, TextHighlightRules);

exports.LatexHighlightRules = LatexHighlightRules;

});
