import React, {useState, useEffect} from 'react';
import Card from '../Components/Phonecard';
import phonesData from '../../public/Data/Phone.json';
import '../Styles/global.css'
import Navbar from '../Components/Navbar';
import SearchBar from '../Components/SearchBar'

const PhonePage = () =>{
    const [phones, setPhones] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedBrand, setSelectedBrand] = useState('All');

useEffect(() => {
    const delay = (ms) => new Promise(resolve => setTimeout(resolve,ms));
    const fetchData = async () => {
        try{
            await delay (500);
            if (!phonesData || phonesData.length ===0){
                throw new Error("No phone data found.")
            }
            setPhones(phonesData);
            setIsLoading(false);}
            catch (error){
                console.error("Failed:", error);
                setIsError(true);
                setIsLoading(false)
                
            }
        };
        fetchData()
    },[]
);
const allBrands = [...new Set (phones.map(phone => phone.brand))];
const filteredPhones =phones.filter(phone => 
(selectedBrand === 'All'|| phone.brand === selectedBrand) && 
phone.name.toLowerCase().includes(searchTerm.toLowerCase())
)

if (isLoading){
    return<h2>Loading phones..</h2>;
}
if (isError){
    return <h2>Failed to load phones.</h2>
}
return ( 
   <div className='phoneContainer'>
      <Navbar/>
      
      <div className='bg-light text-black w-100' style={{marginTop:"4.5rem", padding:"20px"}}>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        <div className='d-flex justify-content-center my-3'>
          <select
            className="form-select w-25"
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value)}
          >
            <option value="All">All Brands</option>
            {allBrands.map((brand) => (
              <option key={brand} value={brand}>{brand}</option>
            ))}
          </select>

        </div>
      </div>
       <div className="d-flex flex-wrap justify-content-center gap-4 px-4">
        {filteredPhones.map((phone) => (
          <div key={phone.id} className="card-wrapper">
            <Card phone={phone} />
          </div>
        ))}
      </div>
      

   </div>
)
}
export default PhonePage;
