import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { TicketEntry } from "../redux/Slices/MyTicketSlice";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { BsDownload } from "react-icons/bs";
import jsPDF from "jspdf";

const TransactionDetailPage = () => {
  const { tickets } = useSelector((state: any) => state.myTicket);
  const [data, setData] = useState<TicketEntry>();
  const location = useLocation();
  const token = location.pathname.split("/").at(-1);

  useEffect(() => {
    const filteredTicket = tickets.filter(
      (ticket: TicketEntry) =>
        ticket.token === parseInt(token as unknown as string)
    );
    if (filteredTicket) {
      setData(filteredTicket[0]);
    }
  }, [tickets, token]);

  const formatDate = (dateString?: Date | undefined) => {
    if (dateString) {
      const options: Intl.DateTimeFormatOptions = {
        day: "2-digit",
        month: "long",
        year: "numeric",
      };
      const date = new Date(dateString);
      const formattedDate = date.toLocaleDateString("en-US", options);
      return formattedDate;
    }
    return "-";
  };

  const downloadPDF = () => {
    const doc = new jsPDF();

    // Background color
    doc.setFillColor(255, 255, 204); // Light Yellow
    doc.rect(
      0,
      0,
      doc.internal.pageSize.getWidth(),
      doc.internal.pageSize.getHeight(),
      "F"
    );

    // Heading
    doc.setFontSize(25);
    doc.setTextColor(0, 0, 0);
    doc.text("Transaction Details", 10, 20);

    // Movie Name
    doc.setFontSize(20);
    doc.setFont("bold");
    doc.text(`Movie: ${data?.movie.name}`, 10, 40);

    // Theater and Location
    doc.setFontSize(16);
    doc.setFont("normal");
    doc.text(`Location: ${data?.theater.theaterName}`, 10, 55);
    doc.text(`Class: ${data?.theater.dimensionCategory}`, 10, 65);
    doc.text(`Badge: ${data?.theater.badge}`, 10, 75);

    // Date and Time
    doc.text(`Date: ${formatDate(data?.date as unknown as Date)}`, 10, 85);
    doc.text(`Time: ${data?.time ?? ""}`, 10, 95);

    // Token and Seats
    doc.text(`Token: ${data?.token}`, 10, 105);
    doc.text(`Seats: ${data?.seat?.join(", ")}`, 10, 115);

    // Line separator
    doc.setLineWidth(0.5);
    doc.line(10, 125, 200, 125);

    // Purchase Details
    doc.setFontSize(20);
    doc.setFont("bold");
    doc.text("Purchase Details:", 10, 135);
    doc.setFontSize(16);
    doc.setFont("normal");
    doc.text(`Total Amount: ${data?.totalPrice}`, 10, 150);
    doc.text(`Discount: ${data?.discount}`, 10, 160);
    doc.text(`Final Amount: ${data?.finalAmount}`, 10, 170);

    // Footer
    doc.setFontSize(12);
    doc.setTextColor(100);
    doc.text("Thank you for your purchase!", 10, 190);

    // Save the PDF
    doc.save("transaction_details.pdf");
  };

  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center font-bold text-xl mob-l:text-3xl sm:text-3xl md:text-4xl m-4 mob-l:m-8 mt-[5rem] mob-l:mt-[7rem]">
        Transaction Details
      </div>

      {/* MAIN CONTENT */}
      <div className="w-[16rem] mob-s:w-[17rem] mob-m:w-[20rem] mob-l:w-[25rem] min-[530px]:w-[32rem] sm:w-[38rem] md:w-[43rem] mx-auto m-3">
        <div className="flex flex-col h-70 p-10 bg-[--Royal-Blue] rounded-t-2xl">
          <p className="font-medium text-2xl text-[--Pastel-Yellow] py-4">
            {data?.movie.name}
          </p>

          <div className="flex flex-col mob-m:flex-row items-center w-full justify-between gap-x-5 mob-s:gap-x-8">
            <div className="w-full">
              <div className="flex flex-col my-4">
                <p className="text-[--Shade-400] text-sm font-medium">
                  Location
                </p>
                <p className="text-[--Shade-100] text-lg font-medium">
                  {data?.theater.theaterName}
                </p>
              </div>
              <div className="flex flex-col gap-y-5 min-[530px]:flex-row justify-between">
                <div>
                  <p className="text-[--Shade-400] text-sm font-medium">Date</p>
                  <p className="text-[--Shade-100] text-lg font-medium">
                    {formatDate(data?.date as unknown as Date)}
                  </p>
                </div>
                <div>
                  <p className="text-[--Shade-400] text-sm font-medium">Time</p>
                  <p className="text-[--Shade-100] text-lg font-medium">
                    {data?.time ?? ""}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <hr className="hidden mob-l:block w-[130px] h-[1px] bg-[--Shade-300] rounded-xl rotate-90" />
            </div>

            <div className="w-full">
              <div className="my-4">
                <p className="text-[--Shade-400]">Class</p>
                <p className="text-[--Shade-100]">
                  {data?.theater.dimensionCategory}
                </p>
              </div>
              <div>
                <p className="text-[--Shade-400]">Badge</p>
                <p className="text-[--Shade-100]">{data?.theater.badge}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[--Pastel-Yellow] h-70 p-10 flex flex-col gap-y-5 sm:flex-row rounded-b-2xl">
          <div className="w-full flex items-center gap-x-1 mob-s:gap-x-3 mob-m:gap-x-8">
            <div className="flex flex-col gap-y-3">
              <p className="font-medium text-lg">Token:</p>
              <p className="font-medium text-lg">Seats:</p>
            </div>
            <div className="flex flex-col gap-y-3">
              <p className="font-medium text-lg">{data?.token}</p>
              <div className="flex gap-2">
                {data?.seat?.map((chair: string, index: number) => (
                  <p key={index} className="font-medium text-lg">
                    {chair}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center items-center">
            <div
              className="border-2 rounded-lg border-black p-4 cursor-pointer"
              onClick={downloadPDF}
            >
              <BsDownload size={35} />
            </div>
          </div>
        </div>
      </div>

      {/* BILL SECTION */}
      <div className="w-56 mob-s:w-64 mob-m:w-72 mob-l:w-80 mx-auto my-8">
        <p className="font-medium text-lg mob-m:text-xl mob-l:text-2xl">
          Purchase Details
        </p>

        <div className="font-normal text-lg my-4">
          <div className="flex justify-between my-4">
            <div>
              <p className="my-2">Total Amount</p>
              <p>Discount</p>
            </div>

            <div>
              <p className="my-2">{`\b\b ${data?.totalPrice}`}</p>
              <div className="flex items-center justify-end">
                <p>-</p>
                <p>{data?.discount}</p>
              </div>
            </div>
          </div>

          <hr className="w-full my-4" />

          <div className="flex justify-between">
            <div>Final Amount</div>
            <div>{data?.finalAmount}</div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TransactionDetailPage;
