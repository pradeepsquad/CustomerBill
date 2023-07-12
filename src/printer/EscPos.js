import React, {Component} from 'react';
import {StyleSheet, View, Image, Button} from 'react-native';
// import {BluetoothEscposPrinter} from 'react-native-bluetooth-escpos-printer';

export default class EscPos extends Component {
  _listeners = [];

  constructor(props) {
    super(props);
    this.state = {
      boundAddress: props.boundAddress,
      boundName: props.boundName,
      loading: false,
    };
  }

  componentDidMount() {
    //alert(BluetoothManager)
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.btn}>
          <Button
            onPress={() => {
              this.props.navigator.pop();
            }}
            title="&lt;= Back To Pre"
          />
        </View>
        <View style={styles.btn}>
          <Button
            onPress={async () => {
              await BluetoothEscposPrinter.printBarCode(
                '123456789012',
                BluetoothEscposPrinter.BARCODETYPE.JAN13,
                3,
                120,
                0,
                2,
              );
              await BluetoothEscposPrinter.printText('\r\n\r\n\r\n', {});
            }}
            title="Print BarCode"
          />
        </View>
        <View style={styles.btn}>
          <Button
            onPress={async () => {
              await BluetoothEscposPrinter.printQRCode(
                '你是不是傻？',
                280,
                BluetoothEscposPrinter.ERROR_CORRECTION.L,
              ); //.then(()=>{alert('done')},(err)=>{alert(err)});
              await BluetoothEscposPrinter.printText('\r\n\r\n\r\n', {});
            }}
            title="Print QRCode"
          />
        </View>

        <View style={styles.btn}>
          <Button
            onPress={async () => {
              await BluetoothEscposPrinter.printerUnderLine(2);
              await BluetoothEscposPrinter.printText('中国话\r\n', {
                encoding: 'GBK',
                codepage: 0,
                widthtimes: 0,
                heigthtimes: 0,
                fonttype: 1,
              });
              await BluetoothEscposPrinter.printerUnderLine(0);
              await BluetoothEscposPrinter.printText('\r\n\r\n\r\n', {});
            }}
            title="Print UnderLine"
          />
        </View>

        <View style={styles.btn}>
          <Button
            onPress={async () => {
              await BluetoothEscposPrinter.rotate(
                BluetoothEscposPrinter.ROTATION.ON,
              );
              await BluetoothEscposPrinter.printText(
                '中国话中国话中国话中国话中国话\r\n',
                {
                  encoding: 'GBK',
                  codepage: 0,
                  widthtimes: 0,
                  heigthtimes: 0,
                  fonttype: 1,
                },
              );
              await BluetoothEscposPrinter.rotate(
                BluetoothEscposPrinter.ROTATION.OFF,
              );
              await BluetoothEscposPrinter.printText(
                '中国话中国话中国话中国话中国话\r\n',
                {
                  encoding: 'GBK',
                  codepage: 0,
                  widthtimes: 0,
                  heigthtimes: 0,
                  fonttype: 1,
                },
              );
              await BluetoothEscposPrinter.printText('\r\n\r\n\r\n', {});
            }}
            title="Print Rotate"
          />
        </View>

        <View style={styles.btn}>
          <Button
            onPress={async () => {
              await BluetoothEscposPrinter.printerInit();
              await BluetoothEscposPrinter.printText(
                'I am an english\r\n\r\n',
                {},
              );
            }}
            title="Print Text"
          />
        </View>
        <View style={styles.btn}>
          <Button
            onPress={async () => {
              await BluetoothEscposPrinter.printerLeftSpace(0);
              await BluetoothEscposPrinter.printColumn(
                [
                  BluetoothEscposPrinter.width58 / 8 / 3,
                  BluetoothEscposPrinter.width58 / 8 / 3 - 1,
                  BluetoothEscposPrinter.width58 / 8 / 3 - 1,
                ],
                [
                  BluetoothEscposPrinter.ALIGN.CENTER,
                  BluetoothEscposPrinter.ALIGN.CENTER,
                  BluetoothEscposPrinter.ALIGN.CENTER,
                ],
                ['我就是一个测试看看很长会怎么样的啦', 'testing', '223344'],
                {fonttype: 1},
              );
              await BluetoothEscposPrinter.printText('\r\n\r\n\r\n', {});
            }}
            title="Print Column"
          />
        </View>
        <View style={styles.btn}>
          <Button
            disabled={this.state.loading || this.state.boundAddress.length <= 0}
            title="Print Receipt"
            onPress={async () => {
              try {
                await BluetoothEscposPrinter.printerInit();
                await BluetoothEscposPrinter.printerLeftSpace(0);

                await BluetoothEscposPrinter.printerAlign(
                  BluetoothEscposPrinter.ALIGN.CENTER,
                );
                await BluetoothEscposPrinter.setBlob(0);
                await BluetoothEscposPrinter.printText('广州俊烨\r\n', {
                  encoding: 'GBK',
                  codepage: 0,
                  widthtimes: 3,
                  heigthtimes: 3,
                  fonttype: 1,
                });
                await BluetoothEscposPrinter.setBlob(0);
                await BluetoothEscposPrinter.printText('销售单\r\n', {
                  encoding: 'GBK',
                  codepage: 0,
                  widthtimes: 0,
                  heigthtimes: 0,
                  fonttype: 1,
                });
                await BluetoothEscposPrinter.printerAlign(
                  BluetoothEscposPrinter.ALIGN.LEFT,
                );
                await BluetoothEscposPrinter.printText(
                  '客户：零售客户\r\n',
                  {},
                );
                await BluetoothEscposPrinter.printText(
                  '单号：xsd201909210000001\r\n',
                  {},
                );
                await BluetoothEscposPrinter.printText(
                  '日期：' +
                    dateFormat(new Date(), 'yyyy-mm-dd h:MM:ss') +
                    '\r\n',
                  {},
                );
                await BluetoothEscposPrinter.printText(
                  '销售员：18664896621\r\n',
                  {},
                );
                await BluetoothEscposPrinter.printText(
                  '--------------------------------\r\n',
                  {},
                );
                let columnWidths = [12, 6, 6, 8];
                await BluetoothEscposPrinter.printColumn(
                  columnWidths,
                  [
                    BluetoothEscposPrinter.ALIGN.LEFT,
                    BluetoothEscposPrinter.ALIGN.CENTER,
                    BluetoothEscposPrinter.ALIGN.CENTER,
                    BluetoothEscposPrinter.ALIGN.RIGHT,
                  ],
                  ['商品', '数量', '单价', '金额'],
                  {},
                );
                await BluetoothEscposPrinter.printColumn(
                  columnWidths,
                  [
                    BluetoothEscposPrinter.ALIGN.LEFT,
                    BluetoothEscposPrinter.ALIGN.LEFT,
                    BluetoothEscposPrinter.ALIGN.CENTER,
                    BluetoothEscposPrinter.ALIGN.RIGHT,
                  ],
                  [
                    'React-Native定制开发我是比较长的位置你稍微看看是不是这样?',
                    '1',
                    '32000',
                    '32000',
                  ],
                  {},
                );
                await BluetoothEscposPrinter.printText('\r\n', {});
                await BluetoothEscposPrinter.printColumn(
                  columnWidths,
                  [
                    BluetoothEscposPrinter.ALIGN.LEFT,
                    BluetoothEscposPrinter.ALIGN.LEFT,
                    BluetoothEscposPrinter.ALIGN.CENTER,
                    BluetoothEscposPrinter.ALIGN.RIGHT,
                  ],
                  [
                    'React-Native定制开发我是比较长的位置你稍微看看是不是这样?',
                    '1',
                    '32000',
                    '32000',
                  ],
                  {},
                );
                await BluetoothEscposPrinter.printText('\r\n', {});
                await BluetoothEscposPrinter.printText(
                  '--------------------------------\r\n',
                  {},
                );
                await BluetoothEscposPrinter.printColumn(
                  [12, 8, 12],
                  [
                    BluetoothEscposPrinter.ALIGN.LEFT,
                    BluetoothEscposPrinter.ALIGN.LEFT,
                    BluetoothEscposPrinter.ALIGN.RIGHT,
                  ],
                  ['合计', '2', '64000'],
                  {},
                );
                await BluetoothEscposPrinter.printText('\r\n', {});
                await BluetoothEscposPrinter.printText('折扣率：100%\r\n', {});
                await BluetoothEscposPrinter.printText(
                  '折扣后应收：64000.00\r\n',
                  {},
                );
                await BluetoothEscposPrinter.printText(
                  '会员卡支付：0.00\r\n',
                  {},
                );
                await BluetoothEscposPrinter.printText(
                  '积分抵扣：0.00\r\n',
                  {},
                );
                await BluetoothEscposPrinter.printText(
                  '支付金额：64000.00\r\n',
                  {},
                );
                await BluetoothEscposPrinter.printText(
                  '结算账户：现金账户\r\n',
                  {},
                );
                await BluetoothEscposPrinter.printText('备注：无\r\n', {});
                await BluetoothEscposPrinter.printText('快递单号：无\r\n', {});
                await BluetoothEscposPrinter.printText(
                  '打印时间：' +
                    dateFormat(new Date(), 'yyyy-mm-dd h:MM:ss') +
                    '\r\n',
                  {},
                );
                await BluetoothEscposPrinter.printText(
                  '--------------------------------\r\n',
                  {},
                );
                await BluetoothEscposPrinter.printText('电话：\r\n', {});
                await BluetoothEscposPrinter.printText('地址:\r\n\r\n', {});
                await BluetoothEscposPrinter.printerAlign(
                  BluetoothEscposPrinter.ALIGN.CENTER,
                );
                await BluetoothEscposPrinter.printText(
                  '欢迎下次光临\r\n\r\n\r\n',
                  {},
                );
                await BluetoothEscposPrinter.printerAlign(
                  BluetoothEscposPrinter.ALIGN.LEFT,
                );
                await BluetoothEscposPrinter.printText('\r\n\r\n\r\n', {});
              } catch (e) {
                alert(e.message || 'ERROR');
              }
            }}
          />
        </View>
        <View style={styles.btn}>
          <Button
            disabled={this.state.loading || this.state.boundAddress.length <= 0}
            title="Print FOLLOWING Image"
            onPress={async () => {
              try {
                await BluetoothEscposPrinter.printPic(base64Jpg, {
                  width: 200,
                  left: 40,
                });
                await BluetoothEscposPrinter.printText('\r\n\r\n\r\n', {});
                await BluetoothEscposPrinter.printPic(base64Image, {
                  width: 200,
                  left: 40,
                });
                await BluetoothEscposPrinter.printText('\r\n\r\n\r\n', {});
                await BluetoothEscposPrinter.printPic(base64JpgLogo, {
                  width: 220,
                  left: 20,
                });
              } catch (e) {
                alert(e.message || 'ERROR');
              }
            }}
          />
          <View>
            <Image
              style={{width: 150, height: 58}}
              source={{uri: 'data:image/jpeg;base64,' + base64Jpg}}
            />
            <Image
              style={{width: 60, height: 60}}
              source={{uri: 'data:image/png;base64,' + base64Image}}
            />
            <Image
              style={{width: 150, height: 70}}
              source={{uri: 'data:image/jpeg;base64,' + base64JpgLogo}}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  btn: {
    marginBottom: 8,
  },
});





var dateFormat = require('dateformat');
const base64Image =
  'iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAA8FBMVEUAAABCQkJDQ0NFRUU/Pz9BQUFAQEBERERDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0MAAAA0ZZMIAAAATnRSTlMAAAAAAAAAABWFz8JdBQFHt9OYIxSi/PBsBFHjvCSk/vJt5b7mo26h75ziIZkD1csRXvpziwvx+QadveRSSA3XF6r31DMPOSLWzMTZFgd4wftfAAAAAWJLR0QAiAUdSAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAaBJREFUSMe11dlSwjAUgOE2WmUTQRBtBQVBREREQEVUFkHcz/s/jklbQ7YOhwtz2fzftJ1OTi0rWDaJxRPJ1A6xxEXSu5nsXo7Ylrpskt8vABwcuqIgG94RABRLmtgk+eMTugXliiAI8U7ZRaiqwvnrJUH7WnBRFfR5zsKeinoohN4XRHyeZc8F2RJ6SSh9KJReeCpH7QOh9st76L3/5lrPRf5c6wEaF039IlQvmYgXAL1aVxQk8D20YxQk1wDXHQpuGui+22Pv4FbK2L5/639Rt44TYY8WvEcKoUcJqUcIpV8ptN4Xd5H9vd5TMXiIBMOOoXe8x0igzJKgf6pB9JJmCaIXJkPYb6/oFYHoJYHqxXllo/qlcDxcz8VzE9lTkWInLoPuAZIjCrJrgPGEgtYaYDqgIFc07LwMTbNkNmfvQEpVbafbfzXMkvbCn622Lth50adP2BuEf740MVvwP4oi+LyShNArQphXgpB69v/jQppXXCi9IJR5FQqt50KbV74w9Ey8td4/etq8Sn1+TeeGngn3u5PW7myPJj/G/v/WL4DMswebZ4AxAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE1LTA2LTI1VDA4OjQ0OjQ2KzA4OjAww1b9dwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxNS0wNi0yNVQwODo0NDo0NiswODowMLILRcsAAAAASUVORK5CYII=';
const base64Jpg =
  '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AD/WDB+f3f8ABPaqK8V/4Wt4j/6dP+/J/wAaP+FreI/+nT/vyf8AGj+wcZ5ff/wA/wBYMH5/d/wT2qivFf8Aha3iP/p0/wC/J/xo/wCFreI/+nT/AL8n/Gj+wcZ5ff8A8AP9YMH5/d/wT2qivFf+FreI/wDp0/78n/Gj/ha3iP8A6dP+/J/xo/sHGeX3/wDAD/WDB+f3f8E9qorxX/ha3iP/AKdP+/J/xo/4Wt4j/wCnT/vyf8aP7Bxnl9//AAA/1gwfn93/AAT2quR+J/8AyItx/wBdY/8A0IVwf/C1vEf/AE6f9+T/AI1Q1rx7rGvaW9hfi38lyGOyMg5ByOc10YXJcVSrwqStZNPc5sXneErYedON7tNbHM0UUV9mfEhRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAEV1aw3trJbXUYkhlUq6HuKraNpw0jSYbFX3rDuCsepBYkZ98Gr1FR7OPPz21tb5GntJcns76Xv8woooqzMKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/2Q==';
const base64JpgLogo =
  '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';

