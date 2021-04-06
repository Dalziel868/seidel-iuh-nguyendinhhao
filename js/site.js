 document.getElementById('btnCreate').addEventListener('click', () => {
            let parentNode = document.getElementById('elements');
            parentNode.innerHTML = '';
            let number = parseInt(document.getElementById('txtNumber').value);

            for (let i = 1; i <= number; i++) {
                let div = document.createElement('DIV');
                div.classList.add('row');
                div.classList.add('m-2');

                let div2 = document.createElement('DIV');
                div2.classList.add('col-12');
                let p = document.createElement('P');
                p.innerHTML = `Phương trình ${i}: `;

                div2.appendChild(p);
                for (let j = 1; j <= number + 1; j++) {
                    let input = document.createElement('INPUT');
                    input.setAttribute('type', 'text');
                    input.setAttribute('name', `f${i}`);
                    if (j == number + 1) {
                        input.classList.add('col-2');
                    } else {
                        input.classList.add('col-3');
                    }
                    input.setAttribute('placeholder', `X${j}`);

                    // for (let k = 64; k <= 64 + j; k++) {
                    //     input.setAttribute('placeholder', `${String.fromCharCode(k)}${i}`);
                    // }
                    div2.appendChild(input);

                }


                div.appendChild(div2);
                parentNode.appendChild(div);
            }




        });
        document.getElementById('btnSubmit').onclick=function()
        {
            let len=document.getElementsByName('f1').length;
            let arrStart=[];
            for(let i=0;i<len-1;i++)
            {
                let arr=[];
                for(let j=0;j<len;j++)
                {
                    let x=document.getElementsByName(`f${i+1}`).item(j).value;
                    arr.push(x);
                }
                arrStart[i]=arr;
            }
            
            let lenOfArrStart=arrStart.length;
            let lenOfArr0=arrStart[0].length;
            
            let gRay=[];
            let BrayTwo=[];
            for(let i=0;i<lenOfArrStart;i++)
            {
                let bRay=[];
                for(let j=0;j<lenOfArr0;j++)
                {
                    
                    if(i==j)
                    {
                        
                       
                        if(j==0)
                        {
                            
                            for(let k=1;k<lenOfArr0;k++)
                            {
                                
                                if(k==lenOfArr0-1)
                                {
                                    
                                    let x=arrStart[i][k]/arrStart[i][j];
                                    gRay.push(x);
                                }
                                else
                                {
                                    
                                    let x=-arrStart[i][k]/arrStart[i][j];
                                    bRay.push(x);
                                }
                                
                            }
                        }
                        else{
                            
                            for(let k=0;k<j;k++)
                            {
                                
                                let x=-arrStart[i][k]/arrStart[i][j];
                                bRay.push(x);
                            }
                            for(let k=j+1;k<lenOfArr0;k++)
                            {
                                
                                if(k==lenOfArr0-1)
                                {
                                    
                                    let x=arrStart[i][k]/arrStart[i][j];
                                    gRay.push(x);
                                }
                                else{
                                    
                                    let x=-arrStart[i][k]/arrStart[i][j];
                                    bRay.push(x);
                                }
                            }
                        }

                        bRay.splice(j,0,0);
                    }
                }
                
                BrayTwo[i]=bRay;
            }
            let soBuocLap=parseInt(document.getElementById('txtSobuoclap').value);
            let lenOfB=BrayTwo.length;
            
            let xRay=[];
            for(let i=0;i<gRay.length;i++)
            {
                xRay.push(gRay[i]);
            }
            let table=document.getElementById('tblShow');
           
            let tableHeader=table.getElementsByTagName('thead').item(0);
            let tableBody=table.getElementsByTagName('tbody').item(0);
            
            tableHeader.innerHTML="";
            tableBody.innerHTML="";

            let rowHeader=tableHeader.insertRow(0);
           
            let celln=rowHeader.insertCell(0);
            celln.innerHTML='<b>N</b>';

            let rowBody;
            for(let i=0;i<lenOfB;i++)
            {
                    let celli=rowHeader.insertCell(i+1);
                    celli.innerHTML=`<b>X${i+1}</b>`;
            }
            let ray1=[];
            let ray2=[];
            for(let x=0;x<soBuocLap;x++)
            {
                rowBody=tableBody.insertRow(x);
                let cellBody=rowBody.insertCell(0);
                cellBody.innerHTML=`<b>${x+1}</b>`
                for(let i=0;i<lenOfB;i++)
                {
                    let sum=0;
                    for(let j=0;j<lenOfB;j++)
                    {
                        sum+=BrayTwo[i][j]*xRay[j];
                    }
                    xRay[i]=sum+gRay[i];

                    //
                    

                    let cellBdChild=rowBody.insertCell(i+1);
                    cellBdChild.innerHTML=`${xRay[i]}`

                    
                    if(x==soBuocLap-2)
                    {
                        ray1[i]=xRay[i];
                    }
                    
                    if(x==soBuocLap-1)
                    {
                        ray2[i]=xRay[i];
                    }
                }
                
                
                
            }

           
            
            let lenOfRay1=ray1.length;
            let lenOfRay2=ray2.length;
            if(lenOfRay1==0)
            {
                
                for(let i=0;i<lenOfRay2;i++)
                {
                    ray1[i]=gRay[i];
                }
            }
            let maxRs=0;
            let result;
            for(let i=0;i<lenOfRay2;i++)
            {
                
                result=ray2[i]-ray1[i];
                if(result<0)
                {
                    result=-result;
                }
                
                if(result>maxRs)
                {
                    maxRs=result;
                }
            }

            let chuanDongB=[];
            for(let i=0;i<lenOfB;i++)
            {
                chuanDongB[i]=BrayTwo[i].reduce(fnReduce,0);
            }
            
            
            let chuanDongU=[];
            for(let i=0;i<lenOfB-1;i++)
            {
                let sum=0;
                for(let j=0;j<lenOfB;j++)
                {
                    if(i==j)
                    {
                        
                        for(let k=j+1;k<lenOfB;k++)
                        {
                            let v=BrayTwo[i][k];
                            if(v<0)
                            {
                                v=-v;
                            }
                            sum+=v;
                        }
                       
                    }
                }
                chuanDongU[i]=sum;
            }
            let maxB=chuanDongB[0];
            for(let i=1;i<chuanDongB.length;i++)
            {
                if(chuanDongB[i]>maxB)
                {
                    maxB=chuanDongB[i];
                }
            }
            let maxU=chuanDongU[0];
            for(let i=1;i<chuanDongU.length;i++)
            {
                if(chuanDongU[i]>maxU)
                {
                    maxU=chuanDongU[i];
                }
            }

    //         <p style="margin-left: 5%; margin-top: 2%; color: red; font-weight: bold;" id="txtChuanDong"></p>
    // <p style="margin-left: 5%; margin-top: 2%; color: red; font-weight: bold;" id="txtSaiSo"></p>
                if(maxB<1)
                {
                    document.getElementById('txtChuanDong').innerText=`||B|| = ${maxB}, thỏa điều kiện hội tụ`;
                }
                else{
                    document.getElementById('txtChuanDong').innerText=`||B|| = ${maxB}, phương trình không thỏa hội tụ`;
                }
               let txtSaiSo=(maxU/(1-maxB))*maxRs;
               console.log(txtSaiSo);
               document.getElementById('txtSaiSo').innerText=`Sai số nghiệm gần đúng: ${txtSaiSo}`;
        }
        function fnReduce(total,value)
        {
            if(value<0)
            {
                value=-value;
            }
            return total+value;
        }
