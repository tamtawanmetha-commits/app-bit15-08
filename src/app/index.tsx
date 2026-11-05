//นำเข้่า  วิว     ข้อความ    จาก
import { Image, StyleSheet, Text, View } from "react-native";

// ส่งออก เริ่มต้น   ฟังก์.   เเอป
export default function App () {
    return (

        // ใส่สไตล์ตกแต่ง
        <View style={myStyle.container}>

            {/* แสดงข้อความ */}
            <Text style={myStyle.title}>Tamtawan Metha</Text>

            {/* แสดงภาพจากไฟล์ */}
            <Image 
                source={require('@/assets/images/aum.jpg')}
                style={{
                    width: 200, // กว้าง
                    height: 200, // ศูง
                    borderRadius: 100, // ความโค้งของมุม
                    borderWidth: 10, // ความกว้างของขอบ
                    borderColor: "#FF6347" // สีของขอบ
             }}
            />
            {/* ใส่ภาพจากลิงก์ */}
            <Image
                source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe7Pc-8fmeoNrn2Zqn2UC8HANPbyH6paRSl1bGRLeZ-A&s=10"}}
                style={{
                    width: 200, // กว้าง
                    height: 200, // ศูง
                    borderRadius: 100, // ความโค้งของมุม
                    borderWidth: 10, // ความกว้างของขอบ
                    borderColor: "#FF1493" // สีของขอบ
             }}
            />
            {/* จัดเรียงแนวนอน */}
            <View style={{flexDirection: "row" }}>

                {/* fn + e  เปิดอีโมจิ */}
                <Text>cat 🐱</Text>
                <Text>dog 🐶</Text>
                <Text>Duck 🦆</Text>
                <Text>Monkey 🐒</Text>
                <Text>Fish 🐟</Text>
            </View>
        </View>
    )
}

 const myStyle = StyleSheet.create ({
    container:{
        // css บนเว็ป -> background-color
        backgroundColor: "purple" , //สีพื้นหลัง
        flex: 1, // ขยาย
        paddingTop: 80, // เพิ่มช่องว่างในกล่อง
        alignItems: "center"
    },
    title:{
        color: "blue", // สีตัวอักษร
        fontSize: 30, // ขนาด
        fontWeight: 700, //ความหนา
        textAlign: "center", //จัดตำแหน่งการวาง
    }
 })