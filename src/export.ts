import { IBKRAdapter } from "./adapters/IBKR_adapter.ts";
import { DEGIROAdapter } from "./adapters/DEGIRO_adapter.ts";
import { Trading212Adapter } from "./adapters/Trading212_adapter.ts";
import { BoursoramaAdapter } from "./adapters/Boursorama_adapter.ts";
import { InformativeError } from "./InformativeError.ts";
import {
    setECBUrlStart,
    setJustETFUrlStart,
    setYahooFinanceQuery1UrlStart,
    exchangeRatesMap,
    getDefaultSecuritiesMap,
    getSecurity,
    getExchangeRatesMap,
    getCurrencyExchangeRatesMap
} from "./data.ts";
import { getTaxableTransactions, getTaxFormData, getDefaultTaxRate } from "./tax.ts";
import { isNameRegistered } from "./tax.ts";
import { CurrencyCode, SecurityType } from "./enums.ts";
import { formatMoney } from "./formatting.ts";
import { fillPdf } from "./pdf.ts";

// Re-export functions that would be used in a webapp
export {
    IBKRAdapter,
    Trading212Adapter,
    DEGIROAdapter,
    BoursoramaAdapter,
    InformativeError,
    exchangeRatesMap,
    SecurityType,
    CurrencyCode,
    formatMoney,
    isNameRegistered,
    setECBUrlStart,
    setJustETFUrlStart,
    setYahooFinanceQuery1UrlStart,
    getDefaultSecuritiesMap, getSecurity,
    getCurrencyExchangeRatesMap, getExchangeRatesMap,
    getTaxableTransactions, getTaxFormData, getDefaultTaxRate,
    fillPdf,
};