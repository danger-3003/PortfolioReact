import { useState } from "react";
import emailjs from 'emailjs-com';
import swal from "sweetalert";
function Form()
{
    const [name,setName] = useState("");
    const [mail,setMail] = useState("");
    const [subject,setSubject] = useState("");
    const [message,setMessage] = useState("");
    const handleName=(event)=>
    {
        setName(event.target.value);
    }
    const handleMail=(event)=>
    {
        setMail(event.target.value);
    }
    const handleSubject=(event)=>
    {
        setSubject(event.target.value);
    }
    const handleMessage=(event)=>
    {
        setMessage(event.target.value);
    }
    const handleEvent=(event)=>
    {
        event.preventDefault();
        emailjs.send('service_danger', 'template_tp4ky8o', 
        {
            name: name,
            subject:subject,
            message: message,
            email:mail
        },
        'PQ1t7Tsmpe6lFP3YR')
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
            console.error('FAILED...', error);
        });
        swal("Your response has been recorded", "Thank you for contacting Sumanth Narem","success");
        setName("");
        setMail("");
        setSubject("");
        setMessage("");
    }
    return(
        <form className="sm:w-[40vw] md:w-[25rem] flex sm:block items-center flex-col" onSubmit={handleEvent}>
            <div className={`grid ${(window.innerWidth < 640 && window.innerWidth>440)?"grid-cols-2":"grid-col-1"} md:grid-cols-2 w-[75vw] sm:w-auto`}>
                <div className="">
                    <p className="mt-2">Your Name</p>
                    <input type="text" name="" value={name} id="Name" onChange={handleName} className={`text-white outline-none bg-[#141414] border-b-2 border-green-300 ${(window.innerWidth < 640 && window.innerWidth>440)?"w-[35vw]":"w-full"} md:w-48`}/>
                </div> 
                <div className="">
                    <p className="mt-2">Your Email</p>
                    <input type="email" name="" value={mail} id="Email" onChange={handleMail} className={`text-white outline-none bg-[#141414] border-b-2 border-green-300  ${(window.innerWidth < 640 && window.innerWidth>440)?"w-[37vw]":"w-full"} md:w-[12.5rem]`}/>
                </div>
            </div>
            <div className="w-[75vw] sm:w-auto">
                <p className="mt-2">Your Subject</p>
                <input type="text" name="" id="Subject" value={subject} onChange={handleSubject} className={`text-white outline-none bg-[#141414] border-b-2 border-green-300 w-full`}/>
            </div>
            <div className="w-[75vw] sm:w-auto">
                <p className="mt-2">Your Message</p>
                <textarea name="" id="Message" cols="20" value={message} rows="6" onChange={handleMessage} className={`text-white outline-none bg-[#141414] border-b-2 border-green-300 w-full`}></textarea>
            </div>
            <button type="submit" id="submit_button" className="relative inline-flex items-center justify-center px-5 py-1.5 mt-0 md:mt-3 overflow-hidden font-medium tracking-tighter text-white bg-gray-800 rounded-full group">
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-gradient-to-br from-indigo-600 to bg-green-600 rounded-full group-hover:w-56 group-hover:h-56"></span>
                <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                <span className="relative">Send</span>
            </button>
        </form>
    );
}
export default Form;