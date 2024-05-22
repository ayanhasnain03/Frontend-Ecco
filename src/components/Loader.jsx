
const Loader = ({width="unset",length}) => {
 const skeleton = Array.from({length},(_,idx)=>(
  <div key={idx} className="h-[40px] w-full bg-[#c6c3c38f] mb-3"></div>
 ))
  return (
    <div className='flex flex-col pl-8' style={{ width }}>
{skeleton}
    </div>
  )
}

export default Loader