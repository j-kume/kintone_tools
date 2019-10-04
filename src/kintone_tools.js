//=============================================================================
//【ファイル名】
//    kintone_tools.js
//【タイプ】
//    ●PC用 / ○スマートフォン用
//-----------------------------------------------------------------------------
//  Copyright (c) 2018 kintone lovers
//=============================================================================

const KintoneTools = {};

// =============================================
// 定数
// =============================================
KintoneTools.const = {
    "round": {
        "round": 0,
        "ceil": 1,
        "floor": 2
    }
};

// =============================================
// Uniq番号生成
// =============================================
KintoneTools.createUniqNumber = function () {
    return Number(new Date().getTime().toString() + KintoneTools.padding(Math.floor(Math.random() * 1000), 3));
};  // end createUniqNumber

// =============================================
// 指定したフィールドの
// カウントアップ＆ゼロ埋めした値の生成
// =============================================
KintoneTools.createZeroFillNextValue = function (records, field, len) {
    let nextVal = 1;
    if (records.length !== 0) {
        nextVal = Number(records[0][field].value) + 1;
    }
    return KintoneTools.padding(nextVal, len);
};  // end createZeroFillNextValue

// =============================================
// 次のuid生成
// ---------------------------------------------
// Required Field : uid
// =============================================
KintoneTools.createNextUid = function (records) {
    let nextUid = 1;
    if (records.length !== 0) {
        nextUid = Number(records[0].uid.value) + 1;
    }
    return nextUid;
};  // end createNextUid

// =============================================
// 画面情報に次のuidをセットする
// ---------------------------------------------
// Required Field : uid
// =============================================
KintoneTools.setNextUid = function (record, records) {
    record.uid.value = KintoneTools.createNextUid(records);
};  // end setNextUid

// =============================================
// 画面情報にレコードタイトルをフィールドコードを元にセット
// ---------------------------------------------
// Required Field : record_title
// =============================================
KintoneTools.setRecordTitle = function (record, fields) {
    record.record_title.value = KintoneTools.joinFieldValue(record, fields);
};  // end setRecordTitle

// =============================================
// 画面情報にレコードタイトルに値を直接セット
// ---------------------------------------------
// Required Field : record_title
// =============================================
KintoneTools.setRecordTitleByValue = function (record, values, delimiter) {
    let strDelimiter = delimiter || ' ';
    record.record_title.value = values.join(strDelimiter);
};  // end setRecordTitleByValue

// =============================================
// 画面情報にlookup_Keyをフィールドコードを元にセット
// ---------------------------------------------
// Required Field : lookup_key
// =============================================
KintoneTools.setLookupKey = function (record, fields) {
    record.lookup_key.value = KintoneTools.joinFieldValue(record, fields);
};  // end setLookupKey

// =============================================
// 画面情報にlookup_Keyに値を直接セット
// ---------------------------------------------
// Required Field : lookup_key
// =============================================
KintoneTools.setLookupKeyByValue = function (record, values, delimiter) {
    let strDelimiter = delimiter || ' ';
    record.lookup_key.value = values.join(strDelimiter);
};  // end setLookupKeyByValue

// =============================================
// 指定フィールド値結合
// =============================================
KintoneTools.joinFieldValue = function (record, fields, delimiter) {
    let strDelimiter = delimiter || ' ';
    let retStr = '';

    fields.forEach(function(val) {
        if (record[val].value) {
            retStr += (record[val].value + strDelimiter);
        }
    });
    retStr = retStr.slice(0, -1);
    return retStr;
};  // end joinFieldValue

// =============================================
// 数値を3桁カンマ区切りにする
// =============================================
KintoneTools.commaSeparate = function(num){
    return String(num).replace( /(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
}; // end commaSeparate

// =============================================
// パディング
// ---------------------------------------------
// fillStrが未入力の場合には、
// 「0」でパディングする
// =============================================
KintoneTools.padding = function(num, len, fillStr){
    let str = fillStr || '0';
    let base = str.repeat(len);
    return (base + num).slice(-1 * len);
}; // end padding

// =============================================
// 丸め処理
// ---------------------------------------------
// num を 10^digit位に丸める。
// 丸め方は type で指定
// type：KintoneTools.const.round にて指定
// =============================================
KintoneTools.rounding = function(num, type, digit){
    
    digit = digit * -1 || 0;

    let ret = num * Math.pow(10, digit);
        
    switch (type) {
        case KintoneTools.const.round.round:
            ret = Math.round(ret);
            break;
        case KintoneTools.const.round.ceil:
            ret = Math.ceil(ret);
            break;
        case KintoneTools.const.round.floor:
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
KintoneTools.getQueryToObject = function(strParam){
    let objRet = {};
    let aryParams = strParam.split('&');
    aryParams.forEach(function(val){
        let aryTmp = val.split('=');
        objRet[aryTmp[0]] = aryTmp[1];
    });
    return objRet;
}; // end getQueryToObject

// =============================================
// 現在開いているアプリのIDの取得(PC・モバイル 不問)
// =============================================
KintoneTools.getThisAppId = function(){
    let thisAppId = -1;
    if (kintone.app.getId() != null) {
        thisAppId = kintone.app.getId();
    }
    if (kintone.mobile.app.getId() != null) {
        thisAppId = kintone.mobile.app.getId();
    }
    return thisAppId;
}; // end getThisAppId

// =============================================
// 現在日付から年齢を計算
// =============================================
KintoneTools.getAge = function(bd){
    let age = -1;

    // 誕生年月日
    let arrBd = bd.split('-');
    let birthday  = new Date(arrBd[0], (arrBd[1] - 1), arrBd[2]);

    // 今日
    let today = new Date();

    // 今年の誕生日
    let thisYearBirthday = new Date(today.getFullYear(), birthday.getMonth(), birthday.getDate());

    // 今年 - 誕生年
    age = today.getFullYear() - birthday.getFullYear();

    // 今年の誕生日を迎えていなければ-1する
    if (today < thisYearBirthday) {
        age--;
    }

    return age;
}; // end getAge

// #############################################
// Add repeat method to String Class for IE
// #############################################
if (!String.prototype.repeat) {
    String.prototype.repeat = function(len) {
        return Array(len + 1).join(this);
    };
}

