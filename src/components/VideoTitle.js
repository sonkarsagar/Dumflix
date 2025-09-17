
export const VideoTitle = ({ title, overview }) => {
  return (
    <div className='w-screen aspect-video pt-[17%] px-10 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-3xl font-bold w-1/4'>{title}</h1>
      <p className='py-4 text-sm text-white w-2/5'>{overview}</p>
      <div className=''>
        <button className="bg-white font-bold text-black py-2 px-5 text-md hover:bg-white/60 rounded-lg cursor-pointer">
          <i className="fa fa-play" aria-hidden="true"></i> Play
        </button>
        <button className='mx-3 bg-gray-500 font-bold text-white py-2 px-5 text-md bg-opacity-50 hover:bg-white/60 rounded-lg cursor-pointer'>
          <i className="fa fa-plus" aria-hidden="true"></i> More Info
        </button>
      </div>
    </div>
  )
}
