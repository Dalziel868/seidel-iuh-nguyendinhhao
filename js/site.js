
function submitFrm() {
    let f1 = document.getElementsByName('f1');
    let f2 = document.getElementsByName('f2');
    let f3 = document.getElementsByName('f3');

    let arr = [
        [f1.item(0).value, f1.item(1).value, f1.item(2).value, f1.item(3).value],
        [f2.item(0).value, f2.item(1).value, f2.item(2).value, f2.item(3).value],
        [f3.item(0).value, f3.item(1).value, f3.item(2).value, f3.item(3).value]
    ];

    if (arr[0][0] == 1) {
        arr[0][1] = -arr[0][1];
        arr[0][2] = -arr[0][2];
    }
    if (arr[0][0] != 1) {
        arr[0][1] = -(arr[0][1] / arr[0][0])
        arr[0][2] = -(arr[0][2] / arr[0][0])
        arr[0][3] = (arr[0][3] / arr[0][0]);
        arr[0][0] = 1;

    }
    if (arr[1][1] == 1) {
        arr[1][0] = -arr[1][0];
        arr[1][2] = -arr[1][2];
    }
    if (arr[1][1] != 1) {
        arr[1][0] = -(arr[1][0] / arr[1][1])
        arr[1][2] = -(arr[1][2] / arr[1][1])
        arr[1][3] = (arr[1][3] / arr[1][1]);
        arr[1][1] = 1;

    }

    if (arr[2][2] == 1) {
        arr[2][1] = -arr[2][1];
        arr[2][0] = -arr[2][0];
    }
    if (arr[2][2] != 1) {
        arr[2][1] = -(arr[2][1] / arr[2][2])
        arr[2][0] = -(arr[2][0] / arr[2][2])
        arr[2][3] = (arr[2][3] / arr[2][2]);
        arr[2][2] = 1;

    }



    let b1 = document.getElementsByName('b1');
    let b2 = document.getElementsByName('b2');
    let b3 = document.getElementsByName('b3');
    b1.item(0).value = 0;
    b1.item(1).value = arr[0][1];
    b1.item(2).value = arr[0][2];

    b2.item(0).value = arr[1][0];
    b2.item(1).value = 0;
    b2.item(2).value = arr[1][2];

    b3.item(0).value = arr[2][0];
    b3.item(1).value = arr[2][1];
    b3.item(2).value = 0;

    document.getElementById('g1').value = arr[0][3];
    document.getElementById('g2').value = arr[1][3];
    document.getElementById('g3').value = arr[2][3];

    let bRay = [
        [0, arr[0][1], arr[0][2]],
        [arr[1][0], 0, arr[1][2]],
        [arr[2][0], arr[2][1], 0]
    ];

    let gRay = [arr[0][3], arr[1][3], arr[2][3]];

    let iRay = [
        [1, 0, 0],
        [parseFloat(-arr[1][0]), 1, 0],
        [parseFloat(-arr[2][0]), parseFloat(-arr[2][1]), 1]
    ];

    // let iRay = [
    //     [0, 0, 0],
    //     [0, 0, 0],
    //     [0, 0, 0]
    // ];

    let uRay = [
        [0, arr[0][1], arr[0][2]],
        [0, 0, arr[1][2]],
        [0, 0, 0]
    ];

    let i1 = document.getElementsByName('i1');
    let i2 = document.getElementsByName('i2');
    let i3 = document.getElementsByName('i3');

    i1.item(0).value = iRay[0][0];
    i1.item(1).value = iRay[0][1];
    i1.item(2).value = iRay[0][2];

    i2.item(0).value = iRay[1][0];
    i2.item(1).value = iRay[1][1];
    i2.item(2).value = iRay[1][2];

    i3.item(0).value = iRay[2][0];
    i3.item(1).value = iRay[2][1];
    i3.item(2).value = iRay[2][2];

    let u1 = document.getElementsByName('u1');
    let u2 = document.getElementsByName('u2');
    let u3 = document.getElementsByName('u3');
    u1.item(0).value = uRay[0][0];
    u1.item(1).value = uRay[0][1];
    u1.item(2).value = uRay[0][2];

    u2.item(0).value = uRay[1][0];
    u2.item(1).value = uRay[1][1];
    u2.item(2).value = uRay[1][2];

    u3.item(0).value = uRay[2][0];
    u3.item(1).value = uRay[2][1];
    u3.item(2).value = uRay[2][2];


    let arrChuanDong = [bRay[0].reduce(rdcFunction, 0), bRay[1].reduce(rdcFunction, 0), bRay[2].reduce(rdcFunction, 0)];
    ///
    let iChuanDong = 1;
    let lofChuanDong = arrChuanDong.length;
    //chuanr dong B
    let max = arrChuanDong[0];
    for (iChuanDong = 1; iChuanDong < lofChuanDong; iChuanDong++) {
        if (arrChuanDong[iChuanDong] > max) {
            max = arrChuanDong[iChuanDong];
        }
    }
    if (max >= 1) {
        document.getElementById('txtChuanDong').innerHTML = `Không thỏa điều kiện hội tụ vì: ||B||=${max.toFixed(2)} >=1`;
    } else {
        document.getElementById('txtChuanDong').innerHTML = `Thỏa điều kiện hội tụ: ||B||=${max.toFixed(2)} <1`;
    }
    //Nghich dao ma tran
    // iRay  // [1,0,0],
    // [-arr[1][0],1,0],
    // [-arr[2][0], -arr[2][1], 1]
    let arOperation = [
        [1, -1, 1],
        [-1, 1, -1],
        [1, -1, 1]
    ];
    //Tim dinh thuc
    let dt0 = (iRay[1][1] * iRay[2][2] - iRay[2][1] * iRay[1][2]) * iRay[0][0] * arOperation[0][0];
    let dt1 = (iRay[1][0] * iRay[2][2] - iRay[2][0] * iRay[1][2]) * iRay[0][1] * arOperation[0][1];
    let dt2 = (iRay[1][0] * iRay[2][1] - iRay[2][0] * iRay[1][1]) * iRay[0][2] * arOperation[0][2];

    let dinhThuc = dt0 + dt1 + dt2;
    if (dinhThuc == 0) {
        document.getElementById('txtDinhThuc').innerHTML = 'Định thức của ma trận (I-L)=0 => Không thể khả nghịch';
    }


    //Chuyển vị ma trận gốc
    let chuyenVi = [
        [iRay[0][0], iRay[1][0], iRay[2][0]],
        [iRay[0][1], iRay[1][1], iRay[2][1]],
        [iRay[0][2], iRay[1][2], iRay[2][2]]
    ];


    //Dinh vi cua tung ma tran con
    let dinhVi = [];
    dinhVi[0] = chuyenVi[1][1] * chuyenVi[2][2] - chuyenVi[2][1] * chuyenVi[1][2];
    dinhVi[1] = chuyenVi[1][0] * chuyenVi[2][2] - chuyenVi[2][0] * chuyenVi[1][2];
    dinhVi[2] = chuyenVi[1][0] * chuyenVi[2][1] - chuyenVi[2][0] * chuyenVi[1][1];

    dinhVi[3] = chuyenVi[0][1] * chuyenVi[2][2] - chuyenVi[2][1] * chuyenVi[0][2];
    dinhVi[4] = chuyenVi[0][0] * chuyenVi[2][2] - chuyenVi[2][0] * chuyenVi[0][2];
    dinhVi[5] = chuyenVi[0][0] * chuyenVi[2][1] - chuyenVi[2][0] * chuyenVi[0][1];

    dinhVi[6] = chuyenVi[0][1] * chuyenVi[1][2] - chuyenVi[1][1] * chuyenVi[0][2];
    dinhVi[7] = chuyenVi[0][0] * chuyenVi[1][2] - chuyenVi[1][0] * chuyenVi[0][2];
    dinhVi[8] = chuyenVi[0][0] * chuyenVi[1][1] - chuyenVi[1][0] * chuyenVi[0][1];

    let adj = [
        [],
        [],
        []
    ];
    adj[0][0] = (dinhVi[0] * arOperation[0][0]) / dinhThuc;
    adj[0][1] = (dinhVi[1] * arOperation[0][1]) / dinhThuc;
    adj[0][2] = (dinhVi[2] * arOperation[0][2]) / dinhThuc;

    adj[1][0] = (dinhVi[3] * arOperation[1][0]) / dinhThuc;
    adj[1][1] = (dinhVi[4] * arOperation[1][1]) / dinhThuc;
    adj[1][2] = (dinhVi[5] * arOperation[1][2]) / dinhThuc;

    adj[2][0] = (dinhVi[6] * arOperation[2][0]) / dinhThuc;
    adj[2][1] = (dinhVi[7] * arOperation[2][1]) / dinhThuc;
    adj[2][2] = (dinhVi[8] * arOperation[2][2]) / dinhThuc;

    let buocLap = document.getElementById('txtSaiSo').value;
    let loopRay = [arr[0][3], arr[1][3], arr[2][3]];
    let rsTotal = [];

    let tongMat = [];

    let tichMat = [];
    let saiSot1 = [];
    let saiSot2 = [];

    let table = document.getElementById('tblShow').getElementsByTagName('tbody').item(0);
    table.innerHTML = "";
    if (buocLap == 1) {
        
        // //u*x(k)
        rsTotal[0] = uRay[0][0] * loopRay[0] + uRay[0][1] * loopRay[1] + uRay[0][2] * loopRay[2];
        rsTotal[1] = uRay[1][0] * loopRay[0] + uRay[1][1] * loopRay[1] + uRay[1][2] * loopRay[2];
        rsTotal[2] = uRay[2][0] * loopRay[0] + uRay[2][1] * loopRay[1] + uRay[2][2] * loopRay[2];

        //u*x(k)+beta

        tongMat[0] = rsTotal[0] + gRay[0];
        tongMat[1] = rsTotal[1] + gRay[1];
        tongMat[2] = rsTotal[2] + gRay[2];


        tichMat[0] = adj[0][0] * tongMat[0] + adj[0][1] * tongMat[1] + adj[0][2] * tongMat[2];
        tichMat[1] = adj[1][0] * tongMat[0] + adj[1][1] * tongMat[1] + adj[1][2] * tongMat[2];
        tichMat[2] = adj[2][0] * tongMat[0] + adj[2][1] * tongMat[1] + adj[2][2] * tongMat[2];

                saiSot1[0]=gRay[0];
                saiSot1[1]=gRay[1];
                saiSot1[2]=gRay[2];

                saiSot2[0]=tichMat[0];
                saiSot2[1]=tichMat[1];
                saiSot2[2]=tichMat[2];

                    let len = table.rows.length;
                    let row = table.insertRow(len);
                    let cell0 = row.insertCell(0);
                    let cell1 = row.insertCell(1);
                    let cell2 = row.insertCell(2);
                    let cell3 = row.insertCell(3);
                    cell0.innerHTML = '<b>1</b>';
                    cell1.innerHTML = tichMat[0];
                    cell2.innerHTML = tichMat[1];
                    cell3.innerHTML = tichMat[2];

            

    } else {
        
        for (let j = 0; j < buocLap; j++) {
            for (let i = 0; i < 3; i++) {
                rsTotal[i] = uRay[i][0] * loopRay[0] + uRay[i][1] * loopRay[1] + uRay[i][2] * loopRay[2];
                tongMat[i] = rsTotal[i] + gRay[i];

                if (i == 2) {
                    for (let k = 0; k < 3; k++) {
                        tichMat[k] = adj[k][0] * tongMat[0] + adj[k][1] * tongMat[1] + adj[k][2] * tongMat[2];


                    }
                    loopRay[0] = tichMat[0];
                    loopRay[1] = tichMat[1];
                    loopRay[2] = tichMat[2];
                    let len = table.rows.length;
                    let row = table.insertRow(len);
                    let cell0 = row.insertCell(0);
                    let cell1 = row.insertCell(1);
                    let cell2 = row.insertCell(2);
                    let cell3 = row.insertCell(3);
                    cell0.innerHTML = `<b>${j+1}</b>`;
                    cell1.innerHTML = loopRay[0];
                    cell2.innerHTML = loopRay[1];
                    cell3.innerHTML = loopRay[2];


                }

            }
            if(j==buocLap-2)
            {
                saiSot1[0]=loopRay[0];
                saiSot1[1]=loopRay[1];
                saiSot1[2]=loopRay[2];
            }
            if(j==buocLap-1)
            {
                saiSot2[0]=loopRay[0];
                saiSot2[1]=loopRay[1];
                saiSot2[2]=loopRay[2];
            }
           
        }
    }
    

    let hieuSaiSo=[saiSot2[0]-saiSot1[0],saiSot2[1]-saiSot1[1],saiSot2[2]-saiSot1[2]];
    //x4-x3
    let maxSaiSo=0;
    for(let i=0;i<hieuSaiSo.length;i++)
    {
        if(hieuSaiSo[i]<0)
        {
            hieuSaiSo[i]=-hieuSaiSo[i];
        }
        if(hieuSaiSo[i]>maxSaiSo)
        {
            maxSaiSo=hieuSaiSo[i];
        }
    }

    let chuanDongU = [uRay[0].reduce(rdcFunction, 0), uRay[1].reduce(rdcFunction, 0), uRay[2].reduce(rdcFunction, 0)];
    //Chuan dong U
    let maxU=chuanDongU[0];
    for(let i=1;i<chuanDongU.length;i++)
    {
        if(chuanDongU[i]>maxU)
        {
            maxU=chuanDongU[i];
        }
    }
   
    let finalRs=(maxU*maxSaiSo)/(1-max);

    document.getElementById('txtFinalRs').innerText=`Sai số nghiệm gần đúng ở bước ${buocLap} là: <= ${finalRs}`;










    // //u*x(k)
    // rsTotal[0] = uRay[0][0] * loopRay[0] + uRay[0][1] * loopRay[1] + uRay[0][2] * loopRay[2];
    // rsTotal[1] = uRay[1][0] * loopRay[0] + uRay[1][1] * loopRay[1] + uRay[1][2] * loopRay[2];
    // rsTotal[2] = uRay[2][0] * loopRay[0] + uRay[2][1] * loopRay[1] + uRay[2][2] * loopRay[2];

    // //u*x(k)+beta

    // tongMat[0] = rsTotal[0] + gRay[0];
    // tongMat[1] = rsTotal[1] + gRay[1];
    // tongMat[2] = rsTotal[2] + gRay[2];


    // tichMat[0] = adj[0][0] * tongMat[0] + adj[0][1] * tongMat[1] + adj[0][2] * tongMat[2];
    // tichMat[1] = adj[1][0] * tongMat[0] + adj[1][1] * tongMat[1] + adj[1][2] * tongMat[2];
    // tichMat[2] = adj[2][0] * tongMat[0] + adj[2][1] * tongMat[1] + adj[2][2] * tongMat[2];



}

function rdcFunction(total, value) {
    if (value < 0) {
        value = -value;
    }
    return total + value;
}
