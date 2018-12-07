//=============================================================================
//【ファイル名】
//    kintone_tools.js
//【タイプ】
//    ●PC用 / ○スマートフォン用
//-----------------------------------------------------------------------------
//  Copyright (c) 2018 kintone lovers
//=============================================================================

var kintoneTools = kintoneTools || {};

// =============================================
// 定数
// =============================================
kintoneTools.const = {
    "round": {
        "round": 0,
        "ceil": 1,
        "floor": 2
    }
};

// =============================================
// Uniq番号生成
// =============================================
kintoneTools.createUniqNumber = function () {
    return Number(new Date().getTime().toString() + kintoneTools.padding(Math.floor(Math.random() * 1000), 3));
};  // end createUniqNumber

// =============================================
// 指定したフィールドの
// カウントアップ＆ゼロ埋めした値の生成
// =============================================
kintoneTools.createZeroFillNextValue = function (records, field, len) {
    var nextVal = 1;
    if (records.length !== 0) {
        nextVal = Number(records[0][field].value) + 1;
    }
    return kintoneTools.padding(nextVal, len);
};  // end createZeroFillNextValue

// =============================================
// 次のuid生成
// =============================================
kintoneTools.createNextUid = function (records) {
    var nextUid = 1;
    if (records.length !== 0) {
        nextUid = Number(records[0].uid.value) + 1;
    }
    return nextUid;
};  // end createNextUid

// =============================================
// 画面情報に次のuidをセットする
// =============================================
kintoneTools.setNextUid = function (record, records) {
    record.uid.value = kintoneTools.createNextUid(records);
};  // end setNextUid

// =============================================
// レコードタイトル生成
// =============================================
kintoneTools.createRecordTitle = function (record, fields) {
    var retStr = '';

    fields.forEach(function(val) {
        if (record[val].value) {
            retStr += (record[val].value + ' ');
        }
    });
    retStr = retStr.slice(0, -1);
    return retStr;
};  // end createRecordTitle

// =============================================
// 画面情報にレコードタイトルをセット
// =============================================
kintoneTools.setRecordTitle = function (record, fields) {
    record.record_title.value = kintoneTools.createRecordTitle(record, fields);
};  // end setRecordTitle

// =============================================
// lookupKey生成
// =============================================
kintoneTools.createLookupKey = function (record, fields) {
    var retStr = '';

    fields.forEach(function(val) {
        if (record[val].value) {
            retStr += (record[val].value + ' ');
        }
    });
    retStr = retStr.slice(0, -1);
    return retStr;
};  // end createLookupKey

// =============================================
// 画面情報にlookupKeyをセット
// =============================================
kintoneTools.setLookupKey = function (record, fields) {
    record.lookup_key.value = kintoneTools.createLookupKey(record, fields);
};  // end setLookupKey

// =============================================
// 数値を3桁カンマ区切りにする
// =============================================
kintoneTools.commaSeparate = function(num){
    return String(num).replace( /(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
}; // end commaSeparate

// =============================================
// パディング
// ---------------------------------------------
// fillStrが未入力の場合には、
// 「0」でパディングする
// =============================================
kintoneTools.padding = function(num, len, fillStr){
    var str = fillStr || '0';
    var base = str.repeat(len);
    return (base + num).slice(-1 * len);
}; // end padding

// =============================================
// 丸め処理
// ---------------------------------------------
// num を 10^digit位に丸める。
// 丸め方は type で指定
// type：kintoneTools.const.round にて指定
// =============================================
kintoneTools.rounding = function(num, type, digit){
    
    digit = digit * -1 || 0;

    var ret = num * Math.pow(10, digit);
        
    switch (type) {
        case kintoneTools.const.round.round:
            ret = Math.round(ret);
            break;
        case kintoneTools.const.round.ceil:
            ret = Math.ceil(ret);
            break;
        case kintoneTools.const.round.floor:
            ret = Math.floor(ret);
            break;
        default:
            ret = Math.round(ret);
            break;
    }
    
    ret /= Math.pow(10, digit);

    return ret;
}; // end rounding


// =============================================
// クエリパラメータから値取得
// =============================================
kintoneTools.getQueryToObject = function(strParam){
    var objRet = {};
    var aryParams = strParam.split('&');
    aryParams.forEach(function(val){
        var aryTmp = val.split('=');
        objRet[aryTmp[0]] = aryTmp[1];
    });
    return objRet;
}; // end getQueryToObject


// #############################################
// Add repeat method to String Class for IE
// #############################################
if (!String.prototype.repeat) {
    String.prototype.repeat = function(len) {
        return Array(len + 1).join(this);
    };
}


