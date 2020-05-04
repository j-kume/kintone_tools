# kintone_tools

# 使用上の注意点
* kintoneシステム管理内とアプリ内の「JavaScript / CSSでカスタマイズ」の両方同時には**入れない**ようにしてください。

# 概要

* [createUniqNumber](https://github.com/j-kume/kintone_tools#kintonetoolscreateuniqnumber)
  * 16桁のランダムな数値を生成
* [createZeroFillNextValue](https://github.com/j-kume/kintone_tools#kintonetoolscreatezerofillnextvaluerecords-field-len)
  * 指定したフィールドのカウントアップ＆ゼロ埋めした値の生成
* [createNextUid](https://github.com/j-kume/kintone_tools#kintonetoolscreatenextuidrecords)
  * 次のuid生成
* [setNextUid](https://github.com/j-kume/kintone_tools#kintonetoolssetnextuidrecord-records)
  * 画面情報に次のuidをセットする
* [setRecordTitle](https://github.com/j-kume/kintone_tools#kintonetoolssetrecordtitlerecord-fields)
  * 画面情報にレコードタイトルをフィールドコードを元にセット
* [setRecordTitleByValue](https://github.com/j-kume/kintone_tools#kintonetoolssetrecordtitlebyvaluerecord-values-delimiter)
  * 画面情報にレコードタイトルに値を直接セット
* [setLookupKey](https://github.com/j-kume/kintone_tools#kintonetoolssetlookupkeyrecord-fields)
  * 画面情報にlookup_Keyをフィールドコードを元にセット
* [setLookupKeyByValue](https://github.com/j-kume/kintone_tools#kintonetoolssetlookupkeybyvaluerecord-values-delimiter)
  * 画面情報にlookup_Keyに値を直接セット
* [joinFieldValue](https://github.com/j-kume/kintone_tools#kintonetoolsjoinfieldvaluerecord-fields-delimiter)
  * 指定フィールド値結合
* [commaSeparate](https://github.com/j-kume/kintone_tools#kintonetoolscommaseparatenum)
  * 数値を3桁カンマ区切りにする
* [padding](https://github.com/j-kume/kintone_tools#kintonetoolspaddingnum-len-fillstr)
  * パディング
* [rounding](https://github.com/j-kume/kintone_tools#kintonetoolsroundingnum-type-digit)
  * 丸め処理
* [getQueryToObject](https://github.com/j-kume/kintone_tools#kintonetoolsgetquerytoobjectstrparam)
  * クエリパラメータから値取得
* [getId](https://github.com/j-kume/kintone_tools#kintonetoolsgetid)
  * 現在のアプリのIDの取得(PC・モバイル 不問)
* [getThisAppId](https://github.com/j-kume/kintone_tools#kintonetoolsgetthisappid)
  * 非推奨 deprecated
  * 現在のアプリのIDの取得(PC・モバイル 不問)
* [getSpaceElement](https://github.com/j-kume/kintone_tools#kintonetoolsgetspaceelementid)
  * スペースフィールドの要素の取得(PC・モバイル 不問)
* [getRelatedRecordsTargetAppId](https://github.com/j-kume/kintone_tools#kintonetoolsgetrelatedrecordstargetappidfieldcode)
  * 関連レコード一覧の参照先のアプリIDを取得(PC・モバイル 不問)
* [getLookupTargetAppId](https://github.com/j-kume/kintone_tools#kintonetoolsgetlookuptargetappidfieldcode)
  * ルックアップフィールドの参照先のアプリIDを取得(PC・モバイル 不問)
* [getRecord](https://github.com/j-kume/kintone_tools#kintonetoolsgetrecord)
  * レコードの値を取得(PC・モバイル 不問)
* [setRecord](https://github.com/j-kume/kintone_tools#kintonetoolssetrecordobjrecord)
  * レコードに値をセットする(PC・モバイル 不問)
* [getQueryCondition](https://github.com/j-kume/kintone_tools#kintonetoolsgetquerycondition)
  * レコード一覧のクエリ文字列を取得(PC・モバイル 不問)
* [getQuery](https://github.com/j-kume/kintone_tools#kintonetoolsgetquery)
  * レコード一覧のオプション付きクエリ文字列を取得(PC・モバイル 不問)
* [getHeaderSpaceElement](https://github.com/j-kume/kintone_tools#kintonetoolsgetheaderspaceelement)
  * メニューの下側の空白部分の要素を取得(PC・モバイル 不問)
* [getContentSpaceElement](https://github.com/j-kume/kintone_tools#kintonetoolsgetcontentspaceelement)
  * ポータルの上側の空白部分の要素を取得(PC・モバイル 不問)
* [isPcMode](https://github.com/j-kume/kintone_tools#kintonetoolsispcmode)
  * PCモード判定
* [isMobileMode](https://github.com/j-kume/kintone_tools#kintonetoolsismobilemode)
  * MOBILEモード判定
* [getAge](https://github.com/j-kume/kintone_tools#kintonetoolsgetage)
  * 現在日付から年齢を計算
* [getIds](https://github.com/j-kume/kintone_tools#kintonetoolsgetIds)
  * クエリ内容に応じたidを配列で取得
* [log2kintone](https://github.com/j-kume/kintone_tools#kintonetoolslog2kintone)
  * エラーログアプリにデータ登録
* [outputLog](https://github.com/j-kume/kintone_tools#kintonetoolsoutputlog)
  * コンソールログ出力
* [duration.start](https://github.com/j-kume/kintone_tools#kintonetoolsdurationstart)
  * 経過時間記録開始
* [duration.end](https://github.com/j-kume/kintone_tools#kintonetoolsdurationend)
  * 経過時間記録終了
* [duration.output](https://github.com/j-kume/kintone_tools#kintonetoolsdurationoutput)
  * 経過時間出力
* [String.prototype.repeat](https://github.com/j-kume/kintone_tools#stringprototyperepeatlen)
  * repeatメソッドの追加(IE向け)
  * 同じ文字列を繰り返す


# 定数
## KintoneTools.const.round

| 項目 | 内容 |
----|---- 
| round | 四捨五入 |
| ceil | 切り上げ |
| floor | 切り捨て |



# 関数
## KintoneTools.createUniqNumber()
* 16桁のランダムな数値を生成

### Parameter 
```
なし
```

### Response
```
数値
```

### Sample
```js

```



## KintoneTools.createZeroFillNextValue(records, field, len)
* 指定したフィールドのカウントアップ＆指定桁数でゼロ埋めした値の生成

### Parameter 
| 引数名 | 種類 | 必須 | 詳細
|:-----------|:------------:|:------------:|:------------
| records | Array | Yes | 複数レコード情報 |
| field | String | Yes | 対象フィールド名
| len | Number | Yes | ゼロ埋め後の桁数

### Response
```
数値
```

### Sample
```js

```



## KintoneTools.createNextUid(records)
* 次のuid生成

### Parameter 
| 引数名 | 種類 | 必須 | 詳細
|:-----------|:------------:|:------------:|:------------
| records | Array | Yes | 複数レコード情報 |

### Response
```
数値
```

### Sample
```js

```



## KintoneTools.setNextUid(record, records)
* 画面情報に次のuidをセットする

### Parameter 
| 引数名 | 種類 | 必須 | 詳細
|:-----------|:------------:|:------------:|:------------
| record | Object | Yes | 画面情報 |
| records | Array | Yes | 複数レコード情報 |

### Response
```
なし
```

### Sample
```js

```



## KintoneTools.setRecordTitle(record, fields)
* 画面情報にレコードタイトルをフィールドコードを元にセット

### Parameter 
| 引数名 | 種類 | 必須 | 詳細
|:-----------|:------------:|:------------:|:------------
| record | Object | Yes | 画面情報 |
| fields | Array | Yes | レコードタイトルを構成するフィールド |

### Response
```
なし
```

### Sample
```js

```



## KintoneTools.setRecordTitleByValue(record, values, delimiter)
* 画面情報にレコードタイトルに値を直接セット

### Parameter 
| 引数名 | 種類 | 必須 | 詳細
|:-----------|:------------:|:------------:|:------------
| record | Object | Yes | 画面情報 |
| values | Array | Yes | レコードタイトルを構成する文字列 |
| delimiter | String | No | 結合文字列 |

### Response
```
なし
```

### Sample
```js

```



## KintoneTools.setLookupKey(record, fields)
* 画面情報にlookup_Keyをフィールドコードを元にセット

### Parameter 
| 引数名 | 種類 | 必須 | 詳細
|:-----------|:------------:|:------------:|:------------
| record | Object | Yes | 画面情報 |
| fields | Array | Yes | lookup_keyを構成するフィールド |

### Response
```
なし
```

### Sample
```js

```



## KintoneTools.setLookupKeyByValue(record, values, delimiter)
* 画面情報にlookup_Keyに値を直接セット

### Parameter 
| 引数名 | 種類 | 必須 | 詳細
|:-----------|:------------:|:------------:|:------------
| record | Object | Yes | 画面情報 |
| values | Array | Yes | lookup_keyを構成する文字列 |
| delimiter | String | No | 結合文字列 |

### Response
```
なし
```

### Sample
```js

```



## KintoneTools.joinFieldValue(record, fields, delimiter)
* 指定フィールド値結合文字列生成

### Parameter 
| 引数名 | 種類 | 必須 | 詳細
|:-----------|:------------:|:------------:|:------------
| record | Object | Yes | 画面情報 |
| fields | Array | Yes | lookup_keyを構成するフィールド |
| delimiter | String | No | 結合文字列 |

### Response
```
文字列
```

### Sample
```js

```



## KintoneTools.commaSeparate(num)
* 数値を3桁カンマ区切りにする

### Parameter 
| 引数名 | 種類 | 必須 | 詳細
|:-----------|:------------:|:------------:|:------------
| num | Number | Yes | 対象となる数値 |

### Response
```
文字列
```

### Sample
```js

```



## KintoneTools.padding(num, len, fillStr)
* パディング文字列生成
* fillStrが未入力の場合には、「0」でパディングする

### Parameter 
| 引数名 | 種類 | 必須 | 詳細
|:-----------|:------------:|:------------:|:------------
| num | Number | Yes | 対象となる数値 |
| len | Number | Yes | 桁数 |
| fillStr | String | No | 埋める文字列 |

### Response
```
文字列
```

### Sample
```js

```



## KintoneTools.rounding(num, type, digit)
* 丸め処理後の数値の生成
* fillStrが未入力の場合には、「0」でパディングする

### Parameter 
| 引数名 | 種類 | 必須 | 詳細
|:-----------|:------------:|:------------:|:------------
| num | Number | Yes | 対象となる数値 |
| type | Number | Yes | 丸め方 KintoneTools.const.roundで指定 |
| digit | String | No | 丸めの桁 10^digit位に丸める。 |

### Response
```
数値
```

### Sample
```js

```



## KintoneTools.getQueryToObject(strParam)
* クエリパラメータを分解し、オブジェクトとして再構築

### Parameter 
| 引数名 | 種類 | 必須 | 詳細
|:-----------|:------------:|:------------:|:------------
| strParam | String | Yes | URLクエリパラメータ |

### Response
```
オブジェクト
```

### Sample
```js

```



## KintoneTools.getId()
* 現在開いているアプリのIDの取得
* PC・モバイル 不問

### Parameter 
```
なし
```

### Response
```
数値
```

### Sample
```js

```



## KintoneTools.getThisAppId()
* 現在開いているアプリのIDの取得
* PC・モバイル 不問
* 非推奨 deprecated

### Parameter 
```
なし
```

### Response
```
数値
```

### Sample
```js

```











## KintoneTools.getSpaceElement(id)
* スペースフィールドの要素の取得
* PC・モバイル 不問

### Parameter 
| 引数名 | 種類 | 必須 | 詳細
|:-----------|:------------:|:------------:|:------------
| id | String | Yes | スペースフィールドに付与しているID |

### Response
```
HTMLオブジェクト div
```

### Sample
```js

```



## KintoneTools.getRelatedRecordsTargetAppId(fieldCode)
* 関連レコード一覧の参照先のアプリIDを取得
* PC・モバイル 不問

### Parameter 
| 引数名 | 種類 | 必須 | 詳細
|:-----------|:------------:|:------------:|:------------
| fieldCode | String | Yes | 対象フィールドのフィールドコード |

### Response
```
数値
```

### Sample
```js

```



## KintoneTools.getLookupTargetAppId(fieldCode)
* ルックアップフィールドの参照先のアプリIDを取得
* PC・モバイル 不問

### Parameter 
| 引数名 | 種類 | 必須 | 詳細
|:-----------|:------------:|:------------:|:------------
| fieldCode | String | Yes | 対象フィールドのフィールドコード |

### Response
```
数値
```

### Sample
```js

```



## KintoneTools.getRecord()
* レコードの値を取得
* PC・モバイル 不問

### Parameter 
```
なし
```

### Response
```
レコードオブジェクト
```

### Sample
```js

```



## KintoneTools.setRecord(objRecord)
* レコードに値をセットする
* PC・モバイル 不問

### Parameter 
| 引数名 | 種類 | 必須 | 詳細
|:-----------|:------------:|:------------:|:------------
| objRecord | Object | Yes | レコードオブジェクト |

### Response
```
なし
```

### Sample
```js

```



## KintoneTools.getQueryCondition()
* レコード一覧のクエリ文字列を取得
* PC・モバイル 不問

### Parameter 
```
なし
```

### Response
```
文字列 クエリ文字列
```

### Sample
```js

```



## KintoneTools.getQuery()
* レコード一覧のオプション付きクエリ文字列を取得
* PC・モバイル 不問

### Parameter 
```
なし
```

### Response
```
文字列 オプション付きクエリ文字列
```

### Sample
```js

```



## KintoneTools.getHeaderSpaceElement()
* メニューの下側の空白部分の要素を取得
* PC・モバイル 不問

### Parameter 
```
なし
```

### Response
```
HTMLオブジェクト div
```

### Sample
```js

```



## KintoneTools.getContentSpaceElement()
* ポータルの上側の空白部分の要素を取得
* PC・モバイル 不問

### Parameter 
```
なし
```

### Response
```
HTMLオブジェクト div
```

### Sample
```js

```



## KintoneTools.isPcMode()
* PCモード判定

### Parameter 
```
なし
```

### Response
```
boolean
true: PCモードである / false: PCモードではない
```

### Sample
```js

```



## KintoneTools.isMobileMode()
* MOBILEモード判定

### Parameter 
```
なし
```

### Response
```
boolean
true: モバイルモードである / false: モバイルモードではない
```

### Sample
```js

```



## KintoneTools.getAge()
* 現在日付から年齢を計算

### Parameter 
| 引数名 | 種類 | 必須 | 詳細
|:-----------|:------------:|:------------:|:------------
| strDate | String | Yes | 日付(YYYY-MM-DD形式) |

### Response
```
数値
```

### Sample
```js

```



## KintoneTools.getIds()
* クエリ内容に応じたidを配列で取得

### Parameter 
| 引数名 | 種類 | 必須 | 詳細
|:-----------|:------------:|:------------:|:------------
| appId | Number | Yes |  |
| condition | String | No |  |
| orderBy | String | No |  |
| guestSpaceId | Number | No |  |

### Response
```
数値の配列
```

### Sample
```js

```



## KintoneTools.log2kintone()
* エラーログアプリにデータ登録

### Parameter 
| 引数名 | 種類 | 必須 | 詳細
|:-----------|:------------:|:------------:|:------------
| objError.appId | Number | Yes | エラーログアプリID |
| objError.message | String | No | エラーメッセージ |
| objError.object | String | No | エラーオブジェクトをJSON.stringfy()したもの |
| objError.mark | String | No |  |

### Response
```
なし
```

### Sample
```js
KintoneTools.log2kintone({
    "appId": 999,
    "message": error.message,
    "object": JSON.stringify(error)
});
```



## KintoneTools.outputLog()
* コンソールログ出力

### Parameter 
| 引数名 | 種類 | 必須 | 詳細
|:-----------|:------------:|:------------:|:------------
| msg | String | No | メッセージ |
| mode | Boolean | No | 出力モード(true: 出力する / false: 出力しない) |

### Response
```
なし
```

### Sample
```js

```




## KintoneTools.duration.start()
* 経過時間記録開始

### Parameter 
| 引数名 | 種類 | 必須 | 詳細
|:-----------|:------------:|:------------:|:------------
| label | String | No | ラベル |
| mode | Boolean | No | 出力モード(true: 出力する / false: 出力しない) |

### Response
```
なし
```

### Sample
```js

```




## KintoneTools.duration.end()
* 経過時間記録終了

### Parameter 
| 引数名 | 種類 | 必須 | 詳細
|:-----------|:------------:|:------------:|:------------
| label | String | No | ラベル |
| mode | Boolean | No | 出力モード(true: 出力する / false: 出力しない) |

### Response
```
なし
```

### Sample
```js

```




## KintoneTools.duration.output()
* 経過時間出力

### Parameter 
| 引数名 | 種類 | 必須 | 詳細
|:-----------|:------------:|:------------:|:------------
| mode | Boolean | No | 出力モード(true: 出力する / false: 出力しない) |

### Response
```
なし
```

### Sample
```js

```



## String.prototype.repeat(len)
* Add repeat method to String Class for IE

### Parameter 
| 引数名 | 種類 | 必須 | 詳細
|:-----------|:------------:|:------------:|:------------
| len | Number | Yes | サイズ |

### Response
```
文字列
```

### Sample
```js

```
