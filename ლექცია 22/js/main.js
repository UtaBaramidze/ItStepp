// 1) შევქმნათ სტუდენტების  მასივი  რომელშიც იქნება შეყვანილი 20 სტუდენტის ინფორმაცია ობიექტის სახით 

//  -- ობიექტს უნდა ქონდეს შემდეგი თვისებები
//  -- სტუდენტის სახელი (სტრინგი)
//  -- ფოტო (სტრინგი)
//  -- ასაკი (ნამბერი)
//  -- რეგისტრაციის თარიღი (სტრინგი)
//  -- კურსის ტიპი (სტრინგი) მაგ: პროგრამირება ,დიზაინი, სოციალური მარკეტინგი
//  -- დასწრება (ნამბერი) მაგ:80,100 (საბოლოოდ უნდა გამოჩნდეს html-ში პროცენტის სახით)
//  -- სტიპენდია (bool - true , false)

// 5) მოცემული ფუნქციები უნდა გამოვიტანოთ html ში თუ სტუდენტს ექნება სტიპენდია უნდა შეუქმნათ მწვანე
//    ბლოკი span ტეგი დასახელებით "სტიპენდიანტი"

// 6) თუ დასწრება უდრის 100% შეუქმნათ კომპონენტი span ტეგი დასახელებით წარმატებული 

let Students = [
    {FirstName: "საბა",age: 18,regData: "2020/09/22",courseType: "პროგრამირება",attendance: 100,scholarship: false,imgSource: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},
    {FirstName: "ზუკა",age: 19,regData: "2020/09/22",courseType: "პროგრამირება",attendance: 80,scholarship: false,imgSource: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},
    {FirstName: "თემური",age: 20,regData: "2020/09/22",courseType: "სოციალური მარკეტინგი",attendance: 80,scholarship: true,imgSource: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},
    {FirstName: "ეთო",age: 21,regData: "2020/09/22",courseType: "დიზაინი",attendance: 100,scholarship: true,imgSource: "https://vistapointe.net/images/ksenia-sukhinova-wallpaper-13.jpg"},
    {FirstName: "მარი",age: 22,regData: "2020/09/22",courseType: "დიზაინი",attendance: 100,scholarship: false,imgSource: "https://vistapointe.net/images/ksenia-sukhinova-wallpaper-13.jpg"},
    {FirstName: "თაზო",age: 23,regData: "2020/05/16",courseType: "პროგრამირება",attendance: 90,scholarship: false,imgSource: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},
    {FirstName: "ლუკა",age: 23,regData: "2020/05/16",courseType: "პროგრამირება",attendance: 90,scholarship: true,imgSource: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},
    {FirstName: "კობა",age: 23,regData: "2020/05/16",courseType: "სოციალური მარკეტინგი",attendance: 100,scholarship: true,imgSource: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},
    {FirstName: "თათია",age: 22,regData: "2020/05/16",courseType: "დიზაინი",attendance: 100,scholarship: true,imgSource: "https://vistapointe.net/images/ksenia-sukhinova-wallpaper-13.jpg"},
    {FirstName: "ანანო",age: 19,regData: "2020/05/16",courseType: "დიზაინი",attendance: 70,scholarship: false,imgSource: "https://vistapointe.net/images/ksenia-sukhinova-wallpaper-13.jpg"},
    {FirstName: "თორნიკე",age: 18,regData: "2020/01/10",courseType: "პროგრამირება",attendance: 70,scholarship: true,imgSource: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},
    {FirstName: "გუგა",age: 18,regData: "2020/01/10",courseType: "პროგრამირება",attendance: 100,scholarship: true,imgSource: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},
    {FirstName: "ია",age: 24,regData: "2020/01/10",courseType: "სოციალური მარკეტინგი",attendance: 60,scholarship: false,imgSource: "https://vistapointe.net/images/ksenia-sukhinova-wallpaper-13.jpg"},
    {FirstName: "ქეთი",age: 25,regData: "2020/01/10",courseType: "დიზაინი",attendance: 60,scholarship: false,imgSource: "https://vistapointe.net/images/ksenia-sukhinova-wallpaper-13.jpg"},
    {FirstName: "ანასტასია",age: 26,regData: "2020/01/10",courseType: "დიზაინი",attendance: 100,scholarship: true,imgSource: "https://vistapointe.net/images/ksenia-sukhinova-wallpaper-13.jpg"},
    {FirstName: "გიორგი",age: 26,regData: "2019/09/04",courseType: "პროგრამირება",attendance: 100,scholarship: false,imgSource: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},
    {FirstName: "გიორგი",age: 22,regData: "2019/09/04",courseType: "პროგრამირება",attendance: 90,scholarship: false,imgSource: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},
    {FirstName: "კირა",age: 21,regData: "2019/09/04",courseType: "სოციალური მარკეტინგი",attendance: 90,scholarship: false,imgSource: "https://vistapointe.net/images/ksenia-sukhinova-wallpaper-13.jpg"},
    {FirstName: "ნინო",age: 23,regData: "2019/09/04",courseType: "დიზაინი",attendance: 80,scholarship: true,imgSource: "https://vistapointe.net/images/ksenia-sukhinova-wallpaper-13.jpg"},
    {FirstName: "ქეთევანი",age: 20,regData: "2019/09/04",courseType: "დიზაინი",attendance: 100,scholarship: true,imgSource: "https://vistapointe.net/images/ksenia-sukhinova-wallpaper-13.jpg"},
]


let StudentsDiv = document.querySelector(".studentsCard .row")
Students.forEach(displayStudentsInHtml)
function displayStudentsInHtml(student){
    let stipendTag;
    if(student.scholarship){
        stipendTag = ` <span class="badge bg-success d-block m-2">სტიპენდიანტი</span> `
    }else{
        stipendTag = ` <span class="badge bg-danger d-block m-2">არ არის სტიპენდიანტი</span> `
    }

    let greatattendance;
    if(student.attendance == 100){
        greatattendance = ` <span class="badge bg-success d-block m-2">წარმატებული</span> `
    }else{
        greatattendance = ` <span class="badge bg-warning d-block m-2">შეფერხებული</span> `
    }


    let StudentsCard =
    `
    <div style="height: 700px;" class="card col-3">
        <img src="${student.imgSource}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${student.FirstName}</h5>
            <p class="card-text">ასაკი:  ${student.age}</p>
            <p class="card-text">კურსი:  ${student.courseType}</p>
            <p class="card-text">დასწრება:  ${greatattendance}</p>
            <p class="card-text">რეგ.თარიღი:  ${student.regData}</p>
            <p class="card-text"> ${stipendTag}</p>
        </div>
    </div>
    `
    StudentsDiv.innerHTML += StudentsCard;
}


// 2) შევქმნათ შემდეგი ფუნქციები რომელიც დააბრუნებს 

//  -- ყველა სტუდენტს რომელიც არის 22 წლის
//  -- ყველა სტუდენს რომელიც რეგისტრირებულია 2020/09/22 ში
//  -- ყველა სტუდენტს რომელიც სწავლობს პროგრამირებაზე
//  -- ყველა სტუდენტს რომელსაც  აქვს 100% დასწრება
//  -- ყველა სტუდენტს რომელსაც აქვს სტიპენდია


let ageHasEqual22Checkbox = document.querySelector("#equal22");
ageHasEqual22Checkbox.addEventListener("click",function(){
    StudentsDiv.innerHTML = "";
    if(this.checked){
        let allStudentEqual22 = Students.filter(equal22)
        allStudentEqual22.forEach(displayStudentsInHtml)
    }else{
        Students.forEach(displayStudentsInHtml)
    }
})
function equal22(student){
    return student.age == 22;
}



let dataRegHasCheckbox = document.querySelector("#dataReg");
dataRegHasCheckbox.addEventListener("click",function(){
    StudentsDiv.innerHTML = "";
    if(this.checked){
        let StudentsHasDataReg = Students.filter(hasDataReg)
        StudentsHasDataReg.forEach(displayStudentsInHtml);
    }else{
        Students.forEach(displayStudentsInHtml);
    }
})
function hasDataReg(student){
    return student.regData == "2020/09/22";
}



let typeCourseHasCheckbox = document.querySelector("#programist");
typeCourseHasCheckbox.addEventListener("click",function(){
    StudentsDiv.innerHTML = "";
    if(this.checked){
        let StudentsHasCourse = Students.filter(hasCourse)
        StudentsHasCourse.forEach(displayStudentsInHtml);
    }else{
        Students.forEach(displayStudentsInHtml);
    }
})
function hasCourse(student){
    return student.courseType == "პროგრამირება";
}


let attendanceHasCheckbox = document.querySelector("#attendanc")
attendanceHasCheckbox.addEventListener("click",function(){
    StudentsDiv.innerHTML = "";
    if(this.checked){
        let StudentsHasAttendance = Students.filter(hasAttendance)
        StudentsHasAttendance.forEach(displayStudentsInHtml);
    }else{
        Students.forEach(displayStudentsInHtml);
    }
})
function hasAttendance(student){
    return student.attendance == 100;
}



let grantHasCheckbox = document.querySelector("#HasGrant");
grantHasCheckbox.addEventListener("click",function(){
    StudentsDiv.innerHTML = "";
    if(this.checked){
        let studentsHasGrant = Students.filter(hasGrant)
        studentsHasGrant.forEach(displayStudentsInHtml);
    }else{
        Students.forEach(displayStudentsInHtml);
    }
})
function hasGrant(student){
    return student.scholarship == true;
}


// 3) მოვძებნოთ სტუდენტის დასახელება რომლის სახელით უდრის "გიორგის",


let namedGiorgiHasCheckbox = document.querySelector("#giorga");
namedGiorgiHasCheckbox.addEventListener("click",function(){
    StudentsDiv.innerHTML = "";
    if(this.checked){
        let studentNamedGiorgi = Students.filter(hasNamedGiorgi)
        studentNamedGiorgi.forEach(displayStudentsInHtml);
    }else{
        Students.forEach(displayStudentsInHtml);
    }
})
function hasNamedGiorgi(student){
    return student.FirstName == "გიორგი";
}


// 4) დავამატოთ საიტზე ძებნა (სახელის მიხედვით)


let searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", function(){
    StudentsDiv.innerHTML = "";
    let nameToSearch = this.value;
    let searchedStudents = Students.filter(checkName)
    searchedStudents.forEach(displayStudentsInHtml);

    function checkName(student){
        return student.FirstName.includes(nameToSearch)
    }
})