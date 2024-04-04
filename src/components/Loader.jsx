
const Loader = ({width="unset",length}) => {
 const skeleton = Array.from({length},(_,idx)=>(
  <div key={idx} className="h-[40px] w-[80rem] bg-[#c6c3c331] mb-3"></div>
 ))
  return (
    <div className='flex flex-col pl-8' style={{ width }}>
{skeleton}
    </div>
  )
}

export default Loader