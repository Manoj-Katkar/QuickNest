import {View, Text, StyleSheet, Touchable} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import SearchIcon from '../../../../assets/icons/SearchIcon';
import FilterIcon from '../../../../assets/icons/FilterIcon';

const SearchFilter = () => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>SearchFilter</Text> */}

      <View style={styles.subContainer1}>
        <TouchableOpacity style={styles.searchBar}>

          <View style={styles.btn1View}>
            <SearchIcon width={30} height={30} style={styles.searchIcon}/>
          <Text style={styles.searchText}> Search</Text>
          </View>

          
        </TouchableOpacity>
      </View>

      <View style={styles.subContainer2}>
        <TouchableOpacity style={styles.subContainer2Btn1}>

          <View style={styles.btn1View}>
            <FilterIcon width={25} height={25} style={styles.btn1Icon}/>
            <Text style={styles.text1}>Filter by : </Text>
          </View>
          
          
        </TouchableOpacity>

        <TouchableOpacity style={styles.subContainer2Btn2}>
          <Text style={styles.text2}>In progress</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.subContainer2Btn3}>
          <Text style={styles.text3}>Resolved</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //   flex:1,
    width:"100%",
    // backgroundColor: 'pink',
    marginBottom:1
  },
  subContainer1:{
    // backgroundColor: 'aqua',
    width:"90%",
    alignSelf:"center",
    marginBottom:15,
    marginTop:10
  },
  subContainer2:{
    // backgroundColor: 'yellow',
    width:"95%",
    flexDirection:"row",
    // justifyContent:"space-between",
    alignSelf:"center",
    marginBottom:10
  },
  btn1View:{
    // backgroundColor:"red",
    flexDirection:"row",
    alignItems:"center"
  },
  searchBar:{
    width:"100%",
    // backgroundColor:"yellow",
    // padding:5,
    borderColor:"gray",
    borderWidth:1.5,
    borderRadius:25,
    paddingTop:10,
    paddingBottom:10,
    paddingLeft:5,
    paddingRight:5
  },
  searchText:{
    color:"#8f8f8f",
    fontSize:19,
    paddingLeft:5
  },
  searchIcon:{
    marginLeft:10
  },
  subContainer2Btn1:{
    backgroundColor:"#f5f5f5",
    paddingTop:10,
    paddingBottom:10,
    paddingLeft:10,
    paddingRight:10,
    borderRadius:20
  },
  subContainer2Btn2:{
    backgroundColor:"white",
    paddingTop:4,
    paddingBottom:5,
    paddingLeft:10,
    paddingRight:10,
    borderWidth:1,
    borderColor:"gray",
    borderRadius:20,
    marginLeft:5,
    marginTop:7
  },
  subContainer2Btn3:{
    backgroundColor:"white",
    paddingTop:4,
    paddingBottom:5,
    paddingLeft:10,
    paddingRight:10,
    borderWidth:1,
    borderColor:"gray",
    borderRadius:20,
    marginLeft:5,
    marginTop:7
  },
  text1:{
    color:"black",
    fontSize:18,
    fontWeight:"500"
  },
  text2:{
    color:"#03195a",
    fontSize:16,
    fontWeight:"400",
  },
  text3:{
    color:"#03195a",
    fontSize:16,
    fontWeight:"400",
  },
  btn1View:{
    flexDirection:"row"
  },
  btn1Icon:{
    marginRight:5,

  }
});

export default SearchFilter;
