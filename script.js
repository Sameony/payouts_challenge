(async () => {
    const sleep = async (delay) => new Promise((resolve) => setTimeout(resolve, delay));
    const sortModal = document.querySelectorAll(".sortModal")[1];
    let shimmerContainer = document.querySelector(".shimmer-container");
    let dataContainer = document.querySelector(".data-container");

    await sleep(3000);

    shimmerContainer?.classList.add("hide");
    dataContainer?.classList.remove("hide");
    console.log("here");

    const timespanSelect = document.querySelectorAll("#timespan")
    const transTable = document.querySelectorAll(".transTable")
    const pendingTable = document.querySelector(".pendingTable")
    const transHeader = document.querySelectorAll(".transHeader")
    const sortBtn = document.querySelector("#sortModalopen");
    const pills = document.querySelectorAll(".pill")
    const populatePayoutData = (payoutArray) =>{
        console.log("population triggered")
        pendingTable.innerHTML=""
        // sortModal.innerHTML=""
        const button_row = document.querySelector(".buttonRow")
        payoutArray?.map(ele => {
            let div = document.createElement("div")
            div.classList.add("eligibleRow")
            let p1 = document.createElement("p")
            p1.innerHTML = ele.date;
            p1.style.width="100px"
            let p2 = document.createElement("p")
            let pcircle = document.createElement("span")
            ele.status==="Processing"?pcircle.classList.add("grayCircle"):pcircle.classList.add("greenCircle")
            p2.appendChild(pcircle)
            let span = document.createElement("span")
            span.innerHTML = ele.status
            p2.style.width="90px"
            p2.style.marginLeft="-15px"
            p2.appendChild(span)
            let p3 = document.createElement("p")
            p3.innerHTML = ele.trans_id;
            p3.style.width="90px"
            let p4 = document.createElement("p")
            p4.innerText = ele.amount
            p4.style.width="120px"
            let p5 = document.createElement("p")
            p5.innerText = ele.fees
            p5.style.width="110px"
            let p6 = document.createElement("p")
            p6.innerText = ele.total
            p6.style.width="120px"
            div.appendChild(p1)
            div.appendChild(p2)
            div.appendChild(p3)
            div.appendChild(p4)
            div.appendChild(p5)
            div.appendChild(p6)

            pendingTable?.appendChild(div)
    })
    transTable[1]?.insertBefore(pendingTable, button_row)
    }
    const populatePendingdata = (pendingArray)=>{
        console.log("population triggered")
        pendingTable.innerHTML=""
        const button_row = document.querySelector(".buttonRow")

        pendingArray?.map(ele => {
            let div = document.createElement("div")
            div.classList.add("pendingRow")
            let p1 = document.createElement("p")
            p1.innerHTML = ele.order_id;
            let p2 = document.createElement("p")
            let pcircle = document.createElement("span")
            pcircle.classList.add("pendingCircle")
            p2.appendChild(pcircle)
            let span = document.createElement("span")
            span.innerHTML = ele.status
            p2.appendChild(span)
            let p3 = document.createElement("p")
            p3.innerHTML = ele.date;
            let p4 = document.createElement("p")
            p4.innerText = ele.amount
            div.appendChild(p1)
            div.appendChild(p2)
            div.appendChild(p3)
            div.appendChild(p4)

            pendingTable?.appendChild(div)
        })


        transTable[1]?.insertBefore(pendingTable, button_row)
    }
    const populateEligibledata = (eligibleArray)=>{
        console.log("population triggered")
        pendingTable.innerHTML=""
        const button_row = document.querySelector(".buttonRow")

        
        eligibleArray?.map(ele => {
            let div = document.createElement("div")
            div.classList.add("eligibleRow")
            let p1 = document.createElement("p")
            p1.innerHTML = ele.order_id;
            let p2 = document.createElement("p")
            let pcircle = document.createElement("span")
            ele.status==="Accepted"?pcircle.classList.add("greenCircle"):ele.status==="Shipped"?pcircle.classList.add("orangeCircle"):pcircle.classList.add("blueCircle")
            p2.appendChild(pcircle)
            let span = document.createElement("span")
            span.innerHTML = ele.status
            p2.style.width="77px"
            p2.style.marginLeft="-15px"
            p2.appendChild(span)
            let p3 = document.createElement("p")
            p3.innerHTML = ele.date;
            p3.style.width="100px"
            let p4 = document.createElement("p")
            p4.innerText = ele.amount
            p4.style.width="70px"
            let p5 = document.createElement("p")
            p5.innerText = ele.fees
            p5.style.width="70px"
            let p6 = document.createElement("p")
            p6.innerText = ele.total
            p6.style.width="70px"
            div.appendChild(p1)
            div.appendChild(p2)
            div.appendChild(p3)
            div.appendChild(p4)
            div.appendChild(p5)
            div.appendChild(p6)

            pendingTable?.appendChild(div)
    })

        transTable[1]?.insertBefore(pendingTable, button_row)
    }
    const populateRefunddata = (refundArray)=>{
        console.log("population triggered")
        pendingTable.innerHTML=""
        const button_row = document.querySelector(".buttonRow")

        
        refundArray?.map(ele => {
            let div = document.createElement("div")
            div.classList.add("pendingRow")
            let p1 = document.createElement("p")
            p1.innerHTML = ele.order_id;
            let p2 = document.createElement("p")
            let pcircle = document.createElement("span")
            ele.status==="Pending"?pcircle.classList.add("pendingCircle"):ele.status==="Processing"?pcircle.classList.add("grayCircle"):pcircle.classList.add("greenCircle")
            p2.appendChild(pcircle)
            let span = document.createElement("span")
            span.innerHTML = ele.status
            p2.appendChild(span)
            p2.style.marginLeft="-15px"
            let p3 = document.createElement("p")
            p3.innerHTML = ele.date;
            p3.style.marginLeft="10px"
            let p4 = document.createElement("p")
            p4.innerText = ele.amount
            let p5 = document.createElement("p")
            p5.innerText = ele.trans_id
            div.appendChild(p1)
            div.appendChild(p2)
            div.appendChild(p5)
            div.appendChild(p3)
            div.appendChild(p4)

            pendingTable?.appendChild(div)
})

        transTable[1]?.insertBefore(pendingTable, button_row)
    }
    
    if (pills) {
        pills.forEach((pill, idx) => {
            pill.innerText+=idx===4?` (${pendingData.length})`:idx===5?` (${EligibleData.length})`:idx===6?` (${PayoutData.length})`:` (${RefundData.length})`
            pill.addEventListener("click", (e) => {
                pill.classList.add("active")
                pills.forEach((ele, index) => (index !== idx) && ele.classList.remove("active"))
                const table_name = pill.innerText.split(" ")[0]
                pendingTable.innerHTML=""
                sortModal.innerHTML=""
                document.querySelector(".tableHeader")?.remove()
                if (transTable) {
                    const button_row = document.querySelector(".buttonRow")

                    if (table_name === "Pending") {
                        let completedData=pendingData;
                        const tableHeader = document.createElement("div");
                        tableHeader.className = "tableHeader";
                        const orderIdParagraph = document.createElement("p");
                        orderIdParagraph.textContent = "Order ID";
                        const orderStatusParagraph = document.createElement("p");
                        orderStatusParagraph.textContent = "Order status";
                        const orderDateParagraph = document.createElement("p");
                        orderDateParagraph.textContent = "Order date";
                        const downIconImage = document.createElement("img");
                        downIconImage.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAACQklEQVR4nO3ZO4gTcRAG8PGFL9BCwUehgtj4wOLAQoQVJLjsfN/uplgLG0EhV2iliAhK7AQLQWwsLAUbQQsLsRQLxavURhBOGwUtNKKo53lK8K5yjZdkH//dzA+mTJhvZrPJ/iNijDHGGGOMMaMuCILNqjpW5wKwKTU8ybMkZ0j+qnl1M55KG0DHgeaKqvdpA3jmQGNF1cRfA1DVMZKfHWgu1wLwSVV3p94HVDUAMF3j8NMA2PObAMB4jQdwvGf4OSSvlN1sDnVJ5qvdbi8keduBprOqW91M0o8kSZYDeORA80MVgCeNRmOlDKLZbG4g+arC4SdJrpNhhGG4HcCHssMMUB1V3SlZUNX9AL5XaPNTAA5IlsIwPFp2sD5+6x+RPJC86EDA/9UFydECkjccvvRvdnvMcwDied4yAA/LDptSD3zfXypFiON4DckXDm3+JYC1hYSfE8fxVpLvXHi2V9VtUgYA+0h+KzH81yiK9kqZSB4q6ShtBsBhcQGAcyV87k+LS0heKzD8dXFNq9VaAuB+AQO453neYnGR7/urADzNcfPPkyRZLS6LomgLybc5hH/zzz81XKPZnzB/UdU9UiVhGGoWJ8yz7xFJFQE4mcH2T0iVAbg6RPjLUnVJkiwCcGeAS/9u97VSBwBWkHzcxwAmBj7JdVXzzwnz63lsfjIIgvVSRyR3APjYYwCdKIp2SZ2p6kGSP1I2P0WyIaOA5LGUAYzLKCF5fvaZ/ifJMzKKwjDcWNsbnjHGGGOMMcaIw34DBN9H18zA6n0AAAAASUVORK5CYII=";
                        downIconImage.alt = "down icon";
                        downIconImage.style.width = "8px";
                        downIconImage.style.height = "8px";

                        orderDateParagraph.appendChild(downIconImage);

                        const orderAmountParagraph = document.createElement("p");
                        orderAmountParagraph.textContent = "Order amount";

                        tableHeader.appendChild(orderIdParagraph);
                        tableHeader.appendChild(orderStatusParagraph);
                        tableHeader.appendChild(orderDateParagraph);
                        tableHeader.appendChild(orderAmountParagraph);

                        transTable[1]?.insertBefore(tableHeader, button_row);

                        PendingSortModal.forEach(({ labelText, inputId, checked, sort }) => {
                            // Create the label element
                            const label = document.createElement("label");
                          
                            // Create the input element
                            const input = document.createElement("input");
                            input.type = "radio";
                            input.checked= checked;
                            
                            input.id = inputId;
                            input.name = "sort_type"; // Set the common name attribute for radio buttons
                            input.addEventListener("click",()=>sortModal?.classList?.toggle("hide"))
                            
                            label.appendChild(document.createTextNode(labelText));
                            label.insertBefore(input, label.firstChild);
                            label.addEventListener("click",()=>
                                {
                                    sortModal?.classList?.toggle("hide");
                                    completedData=sort(pendingData)
                                    populatePendingdata(completedData)
                                })
                            sortModal?.appendChild(label);
                          })

                          populatePendingdata(completedData)
                        } else if (table_name === "Eligible") {
                            let completedData = EligibleData;
                            const tableHeader = document.createElement("div");
                            tableHeader.className = "tableHeader";
                            const orderIdParagraph = document.createElement("p");
                            orderIdParagraph.textContent = "Order ID";
                            const orderStatusParagraph = document.createElement("p");
                            orderStatusParagraph.textContent = "Order status";
                            const orderDateParagraph = document.createElement("p");
                            orderDateParagraph.textContent = "Order date";
                            const downIconImage = document.createElement("img");
                            downIconImage.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAACQklEQVR4nO3ZO4gTcRAG8PGFL9BCwUehgtj4wOLAQoQVJLjsfN/uplgLG0EhV2iliAhK7AQLQWwsLAUbQQsLsRQLxavURhBOGwUtNKKo53lK8K5yjZdkH//dzA+mTJhvZrPJ/iNijDHGGGOMMaMuCILNqjpW5wKwKTU8ybMkZ0j+qnl1M55KG0DHgeaKqvdpA3jmQGNF1cRfA1DVMZKfHWgu1wLwSVV3p94HVDUAMF3j8NMA2PObAMB4jQdwvGf4OSSvlN1sDnVJ5qvdbi8keduBprOqW91M0o8kSZYDeORA80MVgCeNRmOlDKLZbG4g+arC4SdJrpNhhGG4HcCHssMMUB1V3SlZUNX9AL5XaPNTAA5IlsIwPFp2sD5+6x+RPJC86EDA/9UFydECkjccvvRvdnvMcwDied4yAA/LDptSD3zfXypFiON4DckXDm3+JYC1hYSfE8fxVpLvXHi2V9VtUgYA+0h+KzH81yiK9kqZSB4q6ShtBsBhcQGAcyV87k+LS0heKzD8dXFNq9VaAuB+AQO453neYnGR7/urADzNcfPPkyRZLS6LomgLybc5hH/zzz81XKPZnzB/UdU9UiVhGGoWJ8yz7xFJFQE4mcH2T0iVAbg6RPjLUnVJkiwCcGeAS/9u97VSBwBWkHzcxwAmBj7JdVXzzwnz63lsfjIIgvVSRyR3APjYYwCdKIp2SZ2p6kGSP1I2P0WyIaOA5LGUAYzLKCF5fvaZ/ifJMzKKwjDcWNsbnjHGGGOMMcaIw34DBN9H18zA6n0AAAAASUVORK5CYII=";
                            downIconImage.alt = "down icon";
                            downIconImage.style.width = "8px";
                            downIconImage.style.height = "8px";
                            orderDateParagraph.appendChild(downIconImage);
                            const orderAmountParagraph = document.createElement("p");
                            orderAmountParagraph.textContent = "Order amount";
                            const transFeesParagraph = document.createElement("p");
                            transFeesParagraph.textContent = "Transaction Fees";
                            const totalParagraph = document.createElement("p");
                            totalParagraph.textContent = "Total";
                            
                            tableHeader.appendChild(orderIdParagraph);
                            tableHeader.appendChild(orderStatusParagraph);
                            tableHeader.appendChild(orderDateParagraph);
                            tableHeader.appendChild(orderAmountParagraph);
                            tableHeader.appendChild(transFeesParagraph);
                            tableHeader.appendChild(totalParagraph);
                            
                            transTable[1]?.insertBefore(tableHeader, button_row);
                            EligibleSortModal.forEach(({ labelText, inputId, checked,sort }) => {
                            // Create the label element
                            const label = document.createElement("label");
                          
                            // Create the input element
                            const input = document.createElement("input");
                            input.type = "radio";
                            input.checked= checked;
                            input.id = inputId;
                            input.name = "sort_type"; 
                            
                            label.appendChild(document.createTextNode(labelText));
                            label.insertBefore(input, label.firstChild);
                            label.addEventListener("click",()=>
                                {
                                    sortModal?.classList?.toggle("hide");
                                    completedData=sort(EligibleData)
                                    populateEligibledata(completedData)
                                })
                            
                            sortModal?.appendChild(label);
                          })

                        populateEligibledata(completedData)
                    } else if (table_name === "Completed") {
                        const tableHeader = document.createElement("div");
                        tableHeader.className = "tableHeader";
                        const orderIdParagraph = document.createElement("p");
                        orderIdParagraph.textContent = "Transaction ID";
                        const orderStatusParagraph = document.createElement("p");
                        orderStatusParagraph.textContent = "Payout status";
                        const orderDateParagraph = document.createElement("p");
                        orderDateParagraph.textContent = "Payout date";
                        const downIconImage = document.createElement("img");
                        downIconImage.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAACQklEQVR4nO3ZO4gTcRAG8PGFL9BCwUehgtj4wOLAQoQVJLjsfN/uplgLG0EhV2iliAhK7AQLQWwsLAUbQQsLsRQLxavURhBOGwUtNKKo53lK8K5yjZdkH//dzA+mTJhvZrPJ/iNijDHGGGOMMaMuCILNqjpW5wKwKTU8ybMkZ0j+qnl1M55KG0DHgeaKqvdpA3jmQGNF1cRfA1DVMZKfHWgu1wLwSVV3p94HVDUAMF3j8NMA2PObAMB4jQdwvGf4OSSvlN1sDnVJ5qvdbi8keduBprOqW91M0o8kSZYDeORA80MVgCeNRmOlDKLZbG4g+arC4SdJrpNhhGG4HcCHssMMUB1V3SlZUNX9AL5XaPNTAA5IlsIwPFp2sD5+6x+RPJC86EDA/9UFydECkjccvvRvdnvMcwDied4yAA/LDptSD3zfXypFiON4DckXDm3+JYC1hYSfE8fxVpLvXHi2V9VtUgYA+0h+KzH81yiK9kqZSB4q6ShtBsBhcQGAcyV87k+LS0heKzD8dXFNq9VaAuB+AQO453neYnGR7/urADzNcfPPkyRZLS6LomgLybc5hH/zzz81XKPZnzB/UdU9UiVhGGoWJ8yz7xFJFQE4mcH2T0iVAbg6RPjLUnVJkiwCcGeAS/9u97VSBwBWkHzcxwAmBj7JdVXzzwnz63lsfjIIgvVSRyR3APjYYwCdKIp2SZ2p6kGSP1I2P0WyIaOA5LGUAYzLKCF5fvaZ/ifJMzKKwjDcWNsbnjHGGGOMMcaIw34DBN9H18zA6n0AAAAASUVORK5CYII=";
                        downIconImage.alt = "down icon";
                        downIconImage.style.width = "8px";
                        downIconImage.style.height = "8px";
                        orderDateParagraph.appendChild(downIconImage);
                        const orderAmountParagraph = document.createElement("p");
                        orderAmountParagraph.textContent = "Total Order amount";
                        const transFeesParagraph = document.createElement("p");
                        transFeesParagraph.textContent = "Transaction Fees";
                        const totalParagraph = document.createElement("p");
                        totalParagraph.textContent = "Total Payout amount";

                        tableHeader.appendChild(orderDateParagraph);
                        tableHeader.appendChild(orderStatusParagraph);
                        tableHeader.appendChild(orderIdParagraph);
                        tableHeader.appendChild(orderAmountParagraph);
                        tableHeader.appendChild(transFeesParagraph);
                        tableHeader.appendChild(totalParagraph);

                        transTable[1]?.insertBefore(tableHeader, button_row);
                        let completedData=PayoutData
                        PayoutSortModal.forEach(({ labelText, inputId, checked, sort }) => {
                            // Create the label element
                            const label = document.createElement("label");
                          
                            // Create the input element
                            const input = document.createElement("input");
                            input.type = "radio";
                            input.checked= checked;
                            input.id = inputId;
                            input.name = "sort_type"; // Set the common name attribute for radio buttons
                          
                            
                            label.appendChild(document.createTextNode(labelText));
                            label.insertBefore(input, label.firstChild);
                            label.addEventListener("click",()=>
                                {
                                    console.log(inputId)
                                    sortModal?.classList?.toggle("hide");
                                    console.log(PayoutData)
                                    completedData=sort(PayoutData)
                                    console.log(completedData)
                                    populatePayoutData(completedData)
                                })
                            sortModal?.appendChild(label);
                          })
                        populatePayoutData(completedData)
                    } else if(table_name === "Refunds") {
                        let completedData = RefundData;     
                        const tableHeader = document.createElement("div");
                        tableHeader.className = "tableHeader";

                        
                        const orderIdParagraph = document.createElement("p");
                        orderIdParagraph.textContent = "Order ID";

                        
                        const orderStatusParagraph = document.createElement("p");
                        orderStatusParagraph.textContent = "Refund status";

                        
                        const orderDateParagraph = document.createElement("p");
                        orderDateParagraph.textContent = "Refund date";

                        
                        const downIconImage = document.createElement("img");
                        downIconImage.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAACQklEQVR4nO3ZO4gTcRAG8PGFL9BCwUehgtj4wOLAQoQVJLjsfN/uplgLG0EhV2iliAhK7AQLQWwsLAUbQQsLsRQLxavURhBOGwUtNKKo53lK8K5yjZdkH//dzA+mTJhvZrPJ/iNijDHGGGOMMaMuCILNqjpW5wKwKTU8ybMkZ0j+qnl1M55KG0DHgeaKqvdpA3jmQGNF1cRfA1DVMZKfHWgu1wLwSVV3p94HVDUAMF3j8NMA2PObAMB4jQdwvGf4OSSvlN1sDnVJ5qvdbi8keduBprOqW91M0o8kSZYDeORA80MVgCeNRmOlDKLZbG4g+arC4SdJrpNhhGG4HcCHssMMUB1V3SlZUNX9AL5XaPNTAA5IlsIwPFp2sD5+6x+RPJC86EDA/9UFydECkjccvvRvdnvMcwDied4yAA/LDptSD3zfXypFiON4DckXDm3+JYC1hYSfE8fxVpLvXHi2V9VtUgYA+0h+KzH81yiK9kqZSB4q6ShtBsBhcQGAcyV87k+LS0heKzD8dXFNq9VaAuB+AQO453neYnGR7/urADzNcfPPkyRZLS6LomgLybc5hH/zzz81XKPZnzB/UdU9UiVhGGoWJ8yz7xFJFQE4mcH2T0iVAbg6RPjLUnVJkiwCcGeAS/9u97VSBwBWkHzcxwAmBj7JdVXzzwnz63lsfjIIgvVSRyR3APjYYwCdKIp2SZ2p6kGSP1I2P0WyIaOA5LGUAYzLKCF5fvaZ/ifJMzKKwjDcWNsbnjHGGGOMMcaIw34DBN9H18zA6n0AAAAASUVORK5CYII=";
                        downIconImage.alt = "down icon";
                        downIconImage.style.width = "8px";
                        downIconImage.style.height = "8px";

                        orderDateParagraph.appendChild(downIconImage);

                        const transactoinParagraph = document.createElement("p");
                        transactoinParagraph.textContent = "Transaction ID";

                        const orderAmountParagraph = document.createElement("p");
                        orderAmountParagraph.textContent = "Order amount";

                        tableHeader.appendChild(orderIdParagraph);
                        tableHeader.appendChild(orderStatusParagraph);
                        tableHeader.appendChild(transactoinParagraph);
                        tableHeader.appendChild(orderDateParagraph);
                        tableHeader.appendChild(orderAmountParagraph);

                        transTable[1]?.insertBefore(tableHeader, button_row);

                        RefundSortModal.forEach(({ labelText, inputId, checked,sort }) => {
                            // Create the label element
                            const label = document.createElement("label");
                            const input = document.createElement("input");
                            input.type = "radio";
                            input.checked= checked;
                            input.id = inputId;
                            input.name = "sort_type"; // Set the common name attribute for radio buttons
                          
                            label.appendChild(document.createTextNode(labelText));
                            label.insertBefore(input, label.firstChild);
                            label.addEventListener("click",()=>
                                {
                                    sortModal?.classList?.toggle("hide");
                                    completedData=sort(RefundData)
                                    populateRefunddata(completedData)
                                })

                            sortModal?.appendChild(label);
                          })
                          populateRefunddata(completedData)  
            }
                    transTable[1]?.insertBefore(pendingTable, button_row)
                }

            })
        })
        pills[4].click();
    }
    if (timespanSelect.length) {
        // console.log("clicked")
        timespanSelect[1]?.addEventListener("change", (e) => {
            console.log(e.target.value)
            transHeader[1].innerHTML = "Transactions | " + e.target.value
        })
    }

    if (sortBtn) {
        sortBtn.addEventListener("click", (e) => {
            // e.stopPropagation();
            sortModal?.classList?.toggle("hide");
        });
    }
    


    
})();