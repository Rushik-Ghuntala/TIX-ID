// import React from "react";
// import { Page, Text, View, StyleSheet } from "@react-pdf/renderer";
// import { TicketEntry } from "../redux/Slices/MyTicketSlice";

// interface TransactionPDFProps {
//   data: TicketEntry;
//   formatDate: (dateString?: Date | undefined) => string;
// }

// const TransactionPDF: React.FC<TransactionPDFProps> = ({
//   data,
//   formatDate,
// }) => {
//   const styles = StyleSheet.create({
//     page: {
//       flexDirection: "column",
//       backgroundColor: "#ffffff",
//     },
//     section: {
//       margin: 10,
//       padding: 10,
//       flexGrow: 1,
//     },
//     title: {
//       fontSize: 24,
//       textAlign: "center",
//       marginBottom: 10,
//     },
//     content: {
//       fontSize: 16,
//       marginBottom: 5,
//     },
//   });

//   return (
//     <Page size="A4" style={styles.page}>
//       <View style={styles.section}>
//         <Text style={styles.title}>Transaction Details</Text>
//         <Text style={styles.content}>Movie: {data?.movie.name}</Text>
//         <Text style={styles.content}>
//           Location: {data?.theater.theaterName}
//         </Text>
//         <Text style={styles.content}>Date: {formatDate(data?.date)}</Text>
//         <Text style={styles.content}>Time: {data?.time}</Text>
//         {/* Add more details as needed */}
//       </View>
//     </Page>
//   );
// };

// export default TransactionPDF;
