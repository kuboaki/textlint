// LICENSE : MIT
"use strict";

import { BaseRuleContext } from "./BaseRuleContext";
import { TxtNode } from "@textlint/ast-node-types";
import { TextlintRuleError, TextlintRuleReportedObject } from "./TextlintRuleError";
import { TextlintRuleSeverityLevel } from "./TextlintRuleSeverityLevel";
import { TextlintSourceCode } from "../Source/TextlintSourceCode";
import { TextlintRuleContextFixCommandGenerator } from "./TextlintRuleContextFixCommandGenerator";

/**
 * context.report function
 */
export interface TextlintRuleContextReportFunctionArgs {
    ruleId: string;
    node: TxtNode;
    severity: number;
    ruleError: TextlintRuleError | TextlintRuleReportedObject;
}

/**
 * Rule's context.report() function
 */
export type TextlintRuleContextReportFunction = (args: TextlintRuleContextReportFunctionArgs) => void;

/**
 * Rule context object is passed to each rule as `context`
 * @param {string} ruleId
 * @param {TextlintSourceCode} sourceCode
 * @param {ReportCallback} report
 * @param {Object|boolean|undefined} ruleOptions
 * @param {string} [configBaseDir]
 * @constructor
 */
export interface TextlintRuleContextArgs {
    ruleId: string;
    sourceCode: TextlintSourceCode;
    report: TextlintRuleContextReportFunction;
    configBaseDir?: string;
    severityLevel: TextlintRuleSeverityLevel;
}

export interface TextlintRuleContext extends BaseRuleContext {
    fixer: TextlintRuleContextFixCommandGenerator;
    report: (node: TxtNode, ruleError: TextlintRuleReportedObject | TextlintRuleError, _shouldNotUsed?: any) => void;
}
