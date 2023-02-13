import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity} from 'react-native'
import React from 'react'

export default function ReportScreen() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{marginHorizontal: 20, marginTop: 15}}>
        <Text style={styles.headingText}>GSTR REPORTS</Text>

        <TouchableOpacity style={styles.listButton}>
          <Text style={styles.textColor}>GSTR - 1 </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.listButton}>
          <Text style={styles.textColor}>GSTR - 2 </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.listButton}>
          <Text style={styles.textColor}>GSTR - 3b </Text>
        </TouchableOpacity>

        </View>

        <View style={{marginHorizontal: 20, marginTop: 15}}>
        <Text style={styles.headingText}>TRANSACTION REPORTS</Text>

        <TouchableOpacity style={styles.listButton}>
          <Text style={styles.textColor}>Sale Report </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.listButton}>
          <Text style={styles.textColor}>Sale Return Report </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.listButton}>
          <Text style={styles.textColor}>Sale Wise Profit and Loss Statement </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.listButton}>
          <Text style={styles.textColor}>Purchase Report </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.listButton}>
          <Text style={styles.textColor}>Purchase Return Report </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.listButton}>
          <Text style={styles.textColor}>Money In Report </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.listButton}>
          <Text style={styles.textColor}>Money Out Report </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.listButton}>
          <Text style={styles.textColor}>Order Report </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.listButton}>
          <Text style={styles.textColor}>Sale Person Wise Report </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.listButton}>
          <Text style={styles.textColor}>Sale Person Wise Money In Report </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.listButton}>
          <Text style={styles.textColor}>Expense Category Wise Report </Text>
        </TouchableOpacity>

        </View>

        <View style={{marginHorizontal: 20, marginTop: 15}}>
        <Text style={styles.headingText}>PARTY REPORTS</Text>

        <TouchableOpacity style={styles.listButton}>
          <Text style={styles.textColor}>Party Ledger </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.listButton}>
          <Text style={styles.textColor}>Party Receivable/Payable Report </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.listButton}>
          <Text style={styles.textColor}>Pending Invoices for Customers </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.listButton}>
          <Text style={styles.textColor}>Party Details Report </Text>
        </TouchableOpacity>

        </View>

        <View style={{marginHorizontal: 20, marginTop: 15}}>
        <Text style={styles.headingText}>ITEM/STOCK REPORTS</Text>

        <TouchableOpacity style={styles.listButton}>
          <Text style={styles.textColor}>Stock Summary Report </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.listButton}>
          <Text style={styles.textColor}>Item Sale Report</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.listButton}>
          <Text style={styles.textColor}>Item Report </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.listButton}>
          <Text style={styles.textColor}>Item Order Report</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.listButton}>
          <Text style={styles.textColor}>Barcode File Report </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.listButton}>
          <Text style={styles.textColor}>Items Details Report </Text>
        </TouchableOpacity>
        </View>

        <View style={{marginHorizontal: 20, marginTop: 15, marginBottom: 150}}>
        <Text style={styles.headingText}>OTHER REPORTS</Text>

        <TouchableOpacity style={styles.listButton}>
          <Text style={styles.textColor}>Day End Report </Text>
        </TouchableOpacity>

        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  headingText: {
    color: '#008AD0',
    fontWeight: 'bold', 
    fontSize: 14,
  },
  textColor: {
    color: 'black',
    fontWeight: '600',
    margin: 10,
  },
  listButton: {
    backgroundColor: 'white',
    height: 40,
    marginTop: 8,
    borderRadius: 5,
  },
})