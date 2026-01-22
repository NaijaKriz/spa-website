import { useCallback, useMemo, useState } from 'react';
import { FiInfo, FiPhone, FiUser, FiX } from 'react-icons/fi';
import { FiCheck } from "react-icons/fi";

const Contact = () => {

    const [error,setErrors] = useState({});
    const [isSubmitting,setIsSubmitting] = useState(false);
    const [name,setName] = useState('');
    const [phone,setPhone] = useState('');
    const [selectedServices,setSelectedServices] = useState('');
    const [date,setDate] = useState('');
    const [time,setTime] = useState('');

    const services = useMemo(() => [
        "Hair Styling",
        "Facial Treatment",
        "Manicure/Pedicure",
        "Massage Therapy",
        "Makeup Artistry",
        "Hair Coloring",
        "Waxing",
        "Skin Care",
        "Body Treatment",
        "Others"
    ], []);

    const validateForm = useCallback(() => {
        const errors = {};
        if (!name.trim()) errors.name = 'Name is required.';
        if (!phone.trim()) errors.phone = 'Phone number is required.';
        else if (!/^\d{10}$/.test(phone)) errors.phone = 'Phone number must be exactly 10 digits.';
        if (selectedServices.length === 0) errors.services = 'Please select at least one service.';
        if (!date) errors.date = 'Date is required.';
        if (!time) errors.time = 'Time is required.';
        return errors;
    }, [name, phone, selectedServices, date, time]);

    const toggleService = useCallback((service) => {
        setSelectedServices(prev =>
            prev.includes(service) ? prev.filter(s => s !== service)
            : [...prev, service]
        )
    },[]);


 const handleSubmit = useCallback((e) => {
    e.preventDefault();
    const validateErrors = validateForm();
    if(Object.keys(validateErrors).length){
        setErrors(validateErrors);
        return;
    }
    setErrors({});
    setIsSubmitting(true);
 });

  return (
   <section id="contact" className='py-20 bg-yellow-50 min-h-screen px-4 sm:px-6 lg:px-8'>
        <div className="container mx-auto max-w-2xl">
            <div className="text-center mb-12">
                <h2 className="text-4xl sm:text-5xl font-bold mb-4 font-[Poppins] bg-gradient-to-r from-yellow-500 to-yellow-700
                    bg-clip-text text-transparent">
                        Book Your Beautty session
                </h2>
                <p className="text-yellow-600 text-lg sm:text-xl font-medium">
                    Ready to indulge in a rejuvenating experience? Contact us today to schedule your appointment and let Bella Novera Spa pamper you like never before!
                </p>
            </div>

            <form onSubmit={handleSubmit} noValidate className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 border-2 border-yellow-100">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div className="relative group">
                        <FiUser className='absolute left-4 top-4 text-yellow-400 text-xl'/>
                        <input type="text" placeholder='Your Full Name' value={name} 
                        onChange={(e)=>setName(e.target.value)}
                        className='w-full pl-12 rounded-xl pr-4 py-4 border-2 border-yellow-100 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200
                                transition-all duration-300 placeholder-yellow-300 text-yellow-700 font-medium' autoFocus/>
                        {error.name && (<p className="text-red-400 text-sm mt-1 ml-2 flex items-center gap-1">
                            <FiInfo className="inline" />
                            {error.name}
                        </p>)}
                    </div>

                    <div className="relative group">
                        <FiPhone className='absolute left-4 top-4 text-yellow-400 text-xl'/>
                        <input type="tel" placeholder='Your Phone Number' value={phone} 
                        onChange={(e)=>setPhone(e.target.value.replace(/\D/g,'').slice(0,11))}
                        className='w-full pl-12 rounded-xl pr-4 py-4 border-2 border-yellow-100 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200
                                transition-all duration-300 placeholder-yellow-300 text-yellow-700 font-medium' autoFocus/>
                        {error.phone && (<p className="text-red-400 text-sm mt-1 ml-2 flex items-center gap-1">
                            <FiInfo className="inline" />
                            {error.phone}
                        </p>)}
                    </div>
                    <div className="md:col-span-2">
                        <label htmlFor="" className="block text-yellow-700 text-lg font-medium mb-3 sm:mb-4">
                            Select Services
                        </label>

                        <div className="flex flex-wrap gap-2 mb-4 cursor-pointer">
                            {services.map((service) => (
                                <div key={service} className="flex items-center bg-yellow-100 rounded-full
                                    px-4 py-2 text-sm text-yellow-700 font-medium transition-all hover:bg-yellow-200">
                                    <span>{service}</span>
                                    <button type="button" onClick={() => toggleService(service) } 
                                        className="ml-2 hover:text-yellow-900">
                                        <FiX className="w-4 h-4" />
                                    </button>
                                </div>
                            ))}
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3">
                            {services.map((service) => () => (
                                <div key={service} onClick={()=>toggleService(service)} 
                                className={`flex items-center cursor-pointer rounded-xl px-4 py-3 transition-all 
                                ${selectedServices.includes(service) ? 'bg-yellow-500 text-white shadow-lg' : 'bg-yellow-50 hover:bg-yellow-100 border-2 border-yellow-100'}`}>
                                    <div className={`flex-shrink-0 w-6 h-6 rounded-md flex items-center justify-center
                                        ${selectedServices.includes(service) ? 'bg-white text-yellow-500' : 'bg-yellow-200 text-transparent'}`}>
                                        <FiCheck className="w-4 h-4" />
                                        <span className='ml-3 text-sm font-medium'>{service}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </form>
        </div>
   </section>
  )
}

export default Contact