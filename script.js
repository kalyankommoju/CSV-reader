// html document to get fully loaded before executing the script
document.addEventListener("DOMContentLoaded",()=>{
    const fileInput=document.getElementById('FileInput');
    const dataTable=document.getElementById('dataTable').getElementsByTagName('tbody')[0];

    FileInput.addEventListener("change",handleFile)
// function to handle the selected file
    function handleFile(){
        // to get the selected file
        const file=fileInput.files[0];
        // check if  a file is selected
        if(file){
            // create the filereader object to read the document of the file
            const reader=new FileReader();
            // read the file as the text
            reader.readAsText(file);
            // event tirggered when the file reading is complet
            reader.onload=(event)=>{
                //get the csv data from 
                const csvData=event.target.result;
                //display the data from the loaded file
                displayDate(csvData);
            }
        }
     
    }
    function displayDate (csvData){
        //split the csv data into an array of row using the newline character
        const data=csvData.split('\n');
        //clear the exisiting content of the table body
        dataTable.innerHTML="";
        //iteration of each row data
        for(let i=1;i<data.length-1;i++){
            //split each row into individual values using a comma as the delimiter
            const row=data[i].split(',');
            //extract name and age values from the row
            const name=row[0];
            const age=row[1];
            //insert the new row into the table and add,it with name and age data
            const newRow=dataTable.insertRow(dataTable.rows.length);
            newRow.insertCell(0).textContent=name;
            newRow.insertCell(1).textContent=age
        }
    }
});