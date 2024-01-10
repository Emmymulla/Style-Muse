import React from "react";  
const Contact = () => {
  return(
    <div className="Contact w-full  md:h-[170vh] h-[230vh]  text-white flex flex-col justify-start items-center border-[1px] border-[black]">
  <div className="w-[100%] h-[30vh] border-[1px] border-[black] flex items-center justify-center imageheader ">
    <div className="md:w-[80vw] w-[80vw] md:h-[10vh] h-[15vh] flex justify-between  items-center">
     <h1 className="text-[30px]">CONTACT</h1>
     <small className="md:flex text-[12px] text-[#d79d05] hidden"><a href="home">HOME</a>        <span className="text-white">  /    CONTACT</span></small>
    </div>   
    </div>   
    <div className="md:w-[85vw] w-[80vw] md:h-[150vh] h-[120vh] flex items-center md:justify-start justify-start flex-col">
     <div className="md:w-[85vw] w-[80vw] md:h-[70vh] h-[90vh] flex items-center justify-center">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31520.518622577438!2d7.322209864660656!3d9.057851577785717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10429964fe59a2d9%3A0xed3b01aba6a81287!2sLearnFactory%20Nigeria!5e0!3m2!1sen!2sng!4v1704793388010!5m2!1sen!2sng" width="1300" height="400" style={{border:"0"}}
     allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
     </div>  
     <div className="w-[85vw] md:h-[60vh] h-[170vh] flex items-start justify-between flex-col ">
       <div className="md:w-[80vw] w-[80vw] md:h-[5vh] h-[5vh] text-start flex items-center justify-between">
        <p>SEND US MESSAGE</p>
        <div className="w-[16vw] h-[5vh] md:flex items-center justify-start hidden">
        <p >CONTACT INFO</p>
        </div>
       </div>
       <div className="w-[85vw] md:h-[55vh] h-[180vh] flex items-start md:justify-between justify-start  md:flex-row flex-col">
        <form className="md:w-[62vw] w-[80vw] md:h-[45vh] h-[75vh] flex md:items-top text-center justify-between
          flex-col ">
          <div className="md:w-[62vw] w-[80vw] md:h-[30vh] h-[90vh] flex md:items-top text-center justify-between
          md:flex-row flex-col">
        <div  className="md:w-[22vw] w-[80vw] h-[30vh] flex items-start justify-between flex-col ">
          <input type="text" className="md:w-[28vw] w-[80vw] h-[7.5vh] bg-transparent border border-gray-600 outline-none p-2.5
           focus:border-[#d79d05] placeholder:text-white" placeholder="Your Name" />
                <input type="email" className="md:w-[28vw] w-[80vw] h-[7.5vh] bg-transparent border border-gray-600 outline-none p-2.5
            placeholder:text-white" placeholder="Your Email" />
              <input type="number" className="md:w-[28vw] w-[80vw] h-[7.5vh] bg-transparent border border-gray-600 outline-none p-2.5
           focus:border-[#d79d05] placeholder:text-white" placeholder="Your Phone" /> 
        </div>
        <input type="text" className="md:w-[32vw] w-[80vw] h-[30vh] md:h-[30vh] bg-transparent border-gray-600  border outline-none focus:border-[#d79d05]
         placeholder:text-white p-2.5 pb-40" placeholder="Your Messsage" />
         </div>
         <div className="w-[62vw] h-[12vh] flex items-center justify-start ">
          <button className="md:w-[9.7vw] w-[35vw] md:h-[5vh] h-[4vh] border border-gray-500 text-[12.5px] hover:bg-[#d79d05] hover:text-black hover:border-none" type='submit'>SUBMIT FORM</button>
         </div>
        </form>
      
        <div className="md:w-[21vw] w-[80vw] md:h-[40vh] h-[60vh] flex items-start justify-center  flex-col">
          <div className="w-[80vw] h-[8vh] flex items-center justify-start md:hidden"><p>CONTACT INFO</p></div>
          <div className="md:w-[21vw] w-[80vw] h-[6.6vh] flex items-center justify-between border-b border-[#222222]">
            <p className="text-[#d79d05] font-semibold">Address:</p> 
            <div className="md:w-[15.5vw] w-[55vw] h-[6.6vh] items-center justify-start flex ">
               <small className="md:text-[14px] text-[10px]">Aba-Owerri Road Aba Abia State</small>
               </div>
          </div>
          <div className="md:w-[21vw] w-[80vw] h-[6.6vh] flex items-center justify-between  border-b border-[#222222]">
          <p className="text-[#d79d05] font-semibold">Phone:</p> 
            <div className="md:w-[15.5vw] w-[55vw] h-[6.6vh] items-center justify-start flex">
               <small>(208)3339296</small>
               </div>
          </div>
          <div className="md:w-[21vw] w-[80vw] h-[6.6vh] flex items-center justify-between border-b border-[#222222]">
          <p className="text-[#d79d05] font-semibold">Fax:</p> 
            <div className="md:w-[15.5vw] w-[55vw] h-[6.6vh] items-center justify-start flex ">
               <small>(208)3339298</small>
               </div>
          </div>
          <div className="md:w-[21vw] w-[80vw] h-[6.6vh] flex items-center justify-between border-b border-[#222222]">
          <p className="text-[#d79d05] font-semibold">Email:</p> 
            <div className="md:w-[15.5vw] w-[55vw] h-[6.6vh] items-center justify-start flex ">
               <a href="#">contact@stylemuse.com</a>
               </div>
          </div>
          <div className="md:w-[21vw] w-[80vw] h-[6.6vh] flex items-center justify-between border-b border-[#222222]">
          <p className="text-[#d79d05] font-semibold">Web:</p> 
            <div className="md:w-[15.5vw] w-[55vw] h-[6.6vh] items-center justify-start flex ">
               <a href="#">https://stylemuse.com</a>
               </div>
               </div>
          <div className="md:w-[21vw] w-[80vw] h-[6.6vh] flex items-center justify-between border-b border-[#222222]">
          <p className="text-[#d79d05] font-semibold">Open:</p> 
            <div className="md:w-[15.5vw] w-[55vw] h-[6.6vh] items-center justify-start flex ">
               <small>Sunday-Friday 08:00-18:00</small>
               </div>
          </div>
        </div>
       </div>
     </div>
    </div>
 
 </div>
  
);
    
 
};

export default Contact;
