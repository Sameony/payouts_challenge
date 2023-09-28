const pendingData = [
    {
        order_id:"#281029",
        status:'Pending',
        date:"27 July, 2023",
        amount:"₹234.69"
    },{
        order_id:"#281029",
        status:'Pending',
        date:"27 July, 2023",
        amount:"₹234.69"
    },{
        order_id:"#281029",
        status:'Pending',
        date:"27 July, 2023",
        amount:"₹234.69"
    },{
        order_id:"#221029",
        status:'Pending',
        date:"27 July, 2023",
        amount:"₹234.69"
    },{
        order_id:"#281029",
        status:'Pending',
        date:"22 August, 2023",
        amount:"₹234.69"
    },{
        order_id:"#281029",
        status:'Pending',
        date:"27 July, 2023",
        amount:"₹234.69"
    },{
        order_id:"#281029",
        status:'Pending',
        date:"27 July, 2023",
        amount:"₹234.69"
    },{
        order_id:"#281029",
        status:'Pending',
        date:"27 July, 2023",
        amount:"₹234.69"
    },{
        order_id:"#281029",
        status:'Pending',
        date:"27 July, 2023",
        amount:"₹234.69"
    },{
        order_id:"#281029",
        status:'Pending',
        date:"27 July, 2023",
        amount:"₹234.69"
    }
]
const PayoutData = [
    {
        trans_id:"#281029",
        status:'Processing',
        date:"29 June, 2023",
        amount:"₹234.69",
        fees:"₹1000",
        total:"₹1254.69"
    },{
        trans_id:"#281029",
        status:'Successful',
        date:"29 July, 2023",
        amount:"₹234.69",
        fees:"₹1000",
        total:"₹1254.69"
    },{
        trans_id:"#281029",
        status:'Successful',
        date:"29 July, 2023",
        amount:"₹234.69",
        fees:"₹1000",
        total:"₹254.69"
    },{
        trans_id:"#221029",
        status:'Processing',
        date:"09 May, 2023",
        amount:"₹234.69",
        fees:"₹1000",
        total:"₹254.69"
    },{
        trans_id:"#281029",
        status:'Successful',
        date:"29 August, 2023",
        amount:"₹234.69",
        fees:"₹1000",
        total:"₹2234.69"
    },{
        trans_id:"#281029",
        status:'Successful',
        date:"29 July, 2023",
        amount:"₹234.69",
        fees:"₹1000",
        total:"₹254.69"
    },{
        trans_id:"#281029",
        status:'Successful',
        date:"29 July, 2023",
        amount:"₹1234.69",
        fees:"₹1000",
        total:"₹2234.69"
    },{
        trans_id:"#281029",
        status:'Successful',
        date:"29 July, 2023",
        amount:"₹234.69",
        fees:"₹1000",
        total:"₹254.69"
    },{
        trans_id:"#281029",
        status:'Successful',
        date:"29 July, 2023",
        amount:"₹234.69",
        fees:"₹1000",
        total:"₹254.69"
    },{
        trans_id:"#281029",
        status:'Successful',
        date:"29 July, 2023",
        amount:"₹234.69",
        fees:"₹1000",
        total:"₹254.69"
    }
]
const EligibleData = [
    {
        order_id:"#281029",
        status:'Accepted',
        date:"27 July, 2023",
        amount:"₹234.69",
        fees:"₹20",
        total:"₹254.69"
    },{
        order_id:"#281029",
        status:'Shipped',
        date:"27 July, 2023",
        amount:"₹234.69",
        fees:"₹20",
        total:"₹254.69"
    },{
        order_id:"#281029",
        status:'Accepted',
        date:"27 July, 2023",
        amount:"₹234.69",
        fees:"₹20",
        total:"₹254.69"
    },{
        order_id:"#221029",
        status:'Delivered',
        date:"27 July, 2023",
        amount:"₹234.69",
        fees:"₹20",
        total:"₹254.69"
    },{
        order_id:"#281029",
        status:'Delivered',
        date:"22 August, 2023",
        amount:"₹234.69",
        fees:"₹20",
        total:"₹254.69"
    },{
        order_id:"#281029",
        status:'Shipped',
        date:"27 July, 2023",
        amount:"₹234.69",
        fees:"₹20",
        total:"₹254.69"
    },{
        order_id:"#281029",
        status:'Delivered',
        date:"27 July, 2023",
        amount:"₹234.69",
        fees:"₹20",
        total:"₹254.69"
    },{
        order_id:"#281029",
        status:'Delivered',
        date:"27 July, 2023",
        amount:"₹234.69",
        fees:"₹20",
        total:"₹254.69"
    },{
        order_id:"#281029",
        status:'Delivered',
        date:"27 July, 2023",
        amount:"₹234.69",
        fees:"₹20",
        total:"₹254.69"
    },{
        order_id:"#281029",
        status:'Delivered',
        date:"27 July, 2023",
        amount:"₹234.69",
        fees:"₹20",
        total:"₹254.69"
    }
]
const RefundData =  [
    {
        order_id:"#281029",
        status:'Pending',
        trans_id:"3201848572",
        date:"27 July, 2023",
        amount:"₹234.69",
    },{
        order_id:"#281029",
        status:'Pending',
        date:"27 July, 2023",
        amount:"₹234.69",
        trans_id:"3201848572",  
    },{
        order_id:"#281029",
        status:'Processing',
        date:"27 July, 2023",
        amount:"₹234.69",
        trans_id:"3201848572",  
    },{
        order_id:"#281029",
        status:'Successful',
        date:"27 July, 2023",
        amount:"₹234.69",
        trans_id:"3201848572",  
    },{
        order_id:"#281029",
        status:'Processing',
        date:"27 July, 2023",
        amount:"₹234.69",
        trans_id:"3201848572",  
    },{
        order_id:"#281029",
        status:'Successful',
        date:"27 July, 2023",
        amount:"₹234.69",
        trans_id:"3201848572",  
    }
]


  const sortByAmountAscending = (data)=> {
    return data.sort((a, b) => {
      const amountA = parseFloat(a.amount.replace("₹", ""));
      const amountB = parseFloat(b.amount.replace("₹", ""));
      return amountA - amountB;
    });
  }
  const sortByAmountDescending = (data)=> {
    return data.sort((a, b) => {
      const amountA = parseFloat(a.amount.replace("₹", ""));
      const amountB = parseFloat(b.amount.replace("₹", ""));
      return amountB - amountA;
    });
  }
  const sortByTotalAscending = (data)=> {
    return data.sort((a, b) => {
      const totalA = parseFloat(a.total.replace("₹", ""));
      const totalB = parseFloat(b.total.replace("₹", ""));
      return totalA - totalB;
    });
  }
  const sortByTotalDescending = (data)=> {
    return data.sort((a, b) => {
      const totalA = parseFloat(a.total.replace("₹", ""));
      const totalB = parseFloat(b.total.replace("₹", ""));
      return totalB - totalA;
    });
  }
  const sortByOrderAscending = (data)=> {
    return data.sort((a, b) => {
      const totalA = parseFloat(a.order_id.replace("#", ""));
      const totalB = parseFloat(b.order_id.replace("#", ""));
      return totalA - totalB;
    });
  }
  const sortByOrderDescending = (data)=> {
    return data.sort((a, b) => {
      const totalA = parseFloat(a.order_id.replace("#", ""));
      const totalB = parseFloat(b.order_id.replace("#", ""));
      return totalB - totalA;
    });
  }

  const sortByDateDescending = (data)=> {
    return data.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateB - dateA;
    });
  }
  const sortByDateAscending = (data)=> {
    return data.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateA - dateB;
    });
  }

 
  const PayoutSortModal = [
    { labelText: "Payout Date(Newest first)", inputId: "dateDsc", checked:true, sort: sortByDateDescending},
    { labelText: "Payout Date(Oldest first)", inputId: "dateAsc", checked:false, sort: sortByDateAscending },
    { labelText: "Payout Amount(High to Low)", inputId: "amtDsc", checked:false, sort:sortByAmountDescending },
    { labelText: "Payout Amount(Low to High)", inputId: "amtAsc", checked:false,  sort:sortByAmountAscending},
    { labelText: "Total (High to Low)", inputId: "totalDsc", checked:false, sort:sortByTotalDescending },
    { labelText: "Total(Low to High)", inputId: "totalAsc", checked:false,  sort:sortByTotalAscending},
  ]

const EligibleSortModal = [
    { labelText: "Order Date(Newest first)", inputId: "dateDsc", checked:true, sort: sortByDateDescending },
    { labelText: "Order Date(Oldest first)", inputId: "dateAsc", checked:false, sort: sortByDateAscending  },
    { labelText: "Order Amount(High to Low)", inputId: "amtDsc", checked:false, sort:sortByAmountDescending  },
    { labelText: "Order Amount(Low to High)", inputId: "amtAsc", checked:false, sort:sortByAmountAscending },
    { labelText: "Total (High to Low)", inputId: "totalDsc", checked:false, sort:sortByTotalDescending },
    { labelText: "Total (Low to High)", inputId: "totalAsc", checked:false, sort:sortByTotalAscending},
  ]

  const PendingSortModal = [
    { labelText: "Order Date(Newest first)", inputId: "dateDsc", checked:true, sort: sortByDateDescending },
    { labelText: "Order Date(Oldest first)", inputId: "dateAsc", checked:false, sort: sortByDateAscending  },
    { labelText: "Order Amount(High to Low)", inputId: "amtDsc", checked:false, sort:sortByAmountDescending  },
    { labelText: "Order Amount(Low to High)", inputId: "amtAsc", checked:false, sort:sortByAmountAscending },
  ]
  const RefundSortModal = [
    { labelText: "Refund Date(Newest first)", inputId: "dateDsc", checked:true, sort: sortByDateDescending },
    { labelText: "Refund Date(Oldest first)", inputId: "dateAsc", checked:false, sort: sortByDateAscending  },
    { labelText: "Order Amount(High to Low)", inputId: "amtDsc", checked:false, sort:sortByAmountDescending  },
    { labelText: "Order Amount(Low to High)", inputId: "amtAsc", checked:false, sort:sortByAmountAscending },
  ]
 