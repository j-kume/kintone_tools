//=============================================================================
//【ファイル名】
//    kintone_tools.js
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
KintoneTools.getId = function(){
    return KintoneTools.getThisAppId();
}
// =============================================
// 現在開いているアプリのIDの取得(PC・モバイル 不問)
// [deprecated]
// =============================================
KintoneTools.getThisAppId = function(){
    let thisAppId = -1;
    if (KintoneTools.isPcMode()) {
        thisAppId = kintone.app.getId();
    }
    if (KintoneTools.isMobileMode()) {
        thisAppId = kintone.mobile.app.getId();
    }
    return thisAppId;
}; // end getThisAppId

// =============================================
// スペースフィールドの要素の取得(PC・モバイル 不問)
// =============================================
KintoneTools.getSpaceElement = function(id){
    let elm = null;
    if (KintoneTools.isPcMode()) {
        elm = kintone.app.record.getSpaceElement(id);
    }
    if (KintoneTools.isMobileMode()) {
        elm = kintone.mobile.app.record.getSpaceElement(id);
    }
    return elm;
}; // end getSpaceElement

// =============================================
// 関連レコード一覧の参照先のアプリIDを取得(PC・モバイル 不問)
// =============================================
KintoneTools.getRelatedRecordsTargetAppId = function(fieldCode){
    let appId = -1;
    if (KintoneTools.isPcMode()) {
        appId = kintone.app.getRelatedRecordsTargetAppId(fieldCode);
    }
    if (KintoneTools.isMobileMode()) {
        appId = kintone.mobile.app.getRelatedRecordsTargetAppId(fieldCode);
    }
    return appId;
}; // end getRelatedRecordsTargetAppId

// =============================================
// ルックアップフィールドの参照先のアプリIDを取得(PC・モバイル 不問)
// =============================================
KintoneTools.getLookupTargetAppId = function(fieldCode){
    let appId = -1;
    if (KintoneTools.isPcMode()) {
        appId = kintone.app.getLookupTargetAppId(fieldCode);
    }
    if (KintoneTools.isMobileMode()) {
        appId = kintone.mobile.app.getLookupTargetAppId(fieldCode);
    }
    return appId;
}; // end getLookupTargetAppId

// =============================================
// レコードの値を取得(PC・モバイル 不問)
// =============================================
KintoneTools.getRecord = function(){
    let objRecord = null;
    if (KintoneTools.isPcMode()) {
        objRecord = kintone.app.record.get();
    }
    if (KintoneTools.isMobileMode()) {
        objRecord = kintone.mobile.app.record.get();
    }
    return objRecord;
}; // end getRecord

// =============================================
// レコードに値をセットする(PC・モバイル 不問)
// =============================================
KintoneTools.setRecord = function(objRecord){
    if (KintoneTools.isPcMode()) {
        kintone.app.record.set(objRecord);
    }
    if (KintoneTools.isMobileMode()) {
        kintone.mobile.app.record.set(objRecord);
    }
}; // end setRecord

// =============================================
// レコード一覧のクエリ文字列を取得(PC・モバイル 不問)
// =============================================
KintoneTools.getQueryCondition = function(){
    let condition = null;
    if (KintoneTools.isPcMode()) {
        condition = kintone.app.getQueryCondition();
    }
    if (KintoneTools.isMobileMode()) {
        condition = kintone.mobile.app.getQueryCondition();
    }
    return condition;
}; // end getQueryCondition

// =============================================
// レコード一覧のオプション付きクエリ文字列を取得(PC・モバイル 不問)
// =============================================
KintoneTools.getQuery = function(){
    let query = null;
    if (KintoneTools.isPcMode()) {
        query = kintone.app.getQuery();
    }
    if (KintoneTools.isMobileMode()) {
        query = kintone.mobile.app.getQuery();
    }
    return query;
}; // end getQuery

// =============================================
// メニューの下側の空白部分の要素を取得(PC・モバイル 不問)
// =============================================
KintoneTools.getHeaderSpaceElement = function(){
    let elm = null;
    if (KintoneTools.isPcMode()) {
        elm = kintone.app.getHeaderSpaceElement();
    }
    if (KintoneTools.isMobileMode()) {
        elm = kintone.mobile.app.getHeaderSpaceElement();
    }
    return elm;
}; // end getHeaderSpaceElement

// =============================================
// ポータルの上側の空白部分の要素を取得(PC・モバイル 不問)
// =============================================
KintoneTools.getContentSpaceElement = function(){
    let elm = null;
    if (KintoneTools.isPcMode()) {
        elm = kintone.portal.getContentSpaceElement();
    }
    if (KintoneTools.isMobileMode()) {
        elm = kintone.mobile.portal.getContentSpaceElement();
    }
    return elm;
}; // end getContentSpaceElement

// =============================================
// PCモード判定
// =============================================
KintoneTools.isPcMode = function(){
    let ret = false;
    if (kintone.app.getId() != null || kintone.portal.getContentSpaceElement() != null) {
        ret = true;
    }
    return ret;
}; // end isPcMode

// =============================================
// MOBILEモード判定
// =============================================
KintoneTools.isMobileMode = function(){
    let ret = false;
    if (kintone.mobile.app.getId() != null || kintone.mobile.portal.getContentSpaceElement() != null) {
        ret = true;
    }
    return ret;
}; // end isMobileMode

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

// =============================================
// クエリ内容に応じたidを配列で取得
// =============================================
KintoneTools.getIds = async (appId, condition, orderBy, guestSpaceId) => {
    const aryRet = [];

    const client_param = {};
    if (guestSpaceId) {client_param.guestSpaceId = guestSpaceId;}

    try {
        const client = new KintoneRestAPIClient(client_param);
        const resp = await client.record.getAllRecords({
            "app": appId,
            "fields": ["$id"],
            "condition": condition ? condition : '',
            "orderBy": orderBy ? orderBy : ''
        }).then(function(resp) {
            // console.log(resp);
            return resp;
        }).catch(function(error) {
            console.log(error);
            return Promise.reject(new Error('GET : ' + appId + ' / ' + error.message));
        });
        console.log(resp);
        resp.map(val => val.$id.value).forEach(val => aryRet.push(Number(val)));
    } catch (error) {
        console.log(error);
    } finally {
        return aryRet;
    }
}; // end getIds

// =============================================
// エラーログアプリにデータ登録
// ---------------------------------------------
// objError.appId   : エラーログアプリのアプリID
// objError.message : エラーメッセージ
// objError.object  : エラーオブジェクトをJSON.stringfy()したもの
// =============================================
KintoneTools.log2kintone = async (objError) => {
    try {
        const client = new KintoneRestAPIClient();
        const resp = await client.record.addRecord({
            "app": objError.appId,
            "record": {
                "エラーメッセージ": {value: objError.message},
                "エラーオブジェクト": {value: objError.object},
                "stack_trace": {value: (function() {
                    const obj = {};
                    Error.captureStackTrace(obj, arguments.callee);
                    return obj.stack;
                })()},
                "マーク":{value: objError.mark}
            }
        }).then(function(resp) {
            console.log(resp);
            return resp;
        }).catch(function(error) {
            console.log(error);
            return Promise.reject(new Error('POST : ' + objError.appId + ' / ' + error.message));
        });
        console.log(resp);
    } catch (error) {
        console.log(error);
    }
}; // end log2kintone

// #############################################
// Add repeat method to String Class for IE
// #############################################
if (!String.prototype.repeat) {
    String.prototype.repeat = function(len) {
        return Array(len + 1).join(this);
    };
}

