# kintone_tools

# 概要

* createUniqNumber
  * 16桁のランダムな数値を生成
* createZeroFillNextValue
  * 指定したフィールドのカウントアップ＆ゼロ埋めした値の生成
* createNextUid
  * 次のuid生成
* setNextUid
  * 画面情報に次のuidをセットする
* setRecordTitle
  * 画面情報にレコードタイトルをセット
* setLookupKey
  * 画面情報にlookup_Keyをセット
* joinFieldValue
  * 指定フィールド値結合
* commaSeparate
  * 数値を3桁カンマ区切りにする
* padding
  * パディング
* rounding
  * 丸め処理
* getQueryToObject
  * クエリパラメータから値取得
* getThisAppId
  * 現在のアプリのIDの取得(PC・モバイル 不問)
* String.prototype.repeat
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
* 画面情報にレコードタイトルをセット

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



## KintoneTools.setLookupKey(record, fields)
* 画面情報にlookup_Keyをセット

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



## KintoneTools.getThisAppId()
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
