/** @format */

export default function LandingPage() {
  return (
    <>
      <div>
        <div className='flex flex-col flex-wrap gap-4 p-4 text-left bg-[#BA181B]'>
          <div>
            <h1 className='text-xl font-bold'>Unmasking The Screen Giant</h1>
          </div>
          <div>
            <p className='font-normal'>
              We rip apart the celluloid canvas and delve into the intricacies
              of the character development. Some characters appear to undergo a
              monumental transformation, but did they really?
            </p>
          </div>
          <div className='flex flex-col'>
            <div>
              <h3>567</h3>
              <p className='font-normal'>Character Transformations</p>
            </div>
          </div>
          <div>
            <div>
              <h3>891</h3>
              <p className='font-normal'>Plot Twists</p>
            </div>
          </div>
          <div>
            <div>
              <h3>463</h3>
              <p className='font-normal'>Corn popped</p>
            </div>
          </div>
        </div>
        {/*  */}
        <div className='flex flex-col gap-4 p-4'>
          <div>
            <div>
              <p className='font-normal'>Cinematography</p>
              <h1 className='text-2xl font-bold'>
                From the grand sweeping landscapes to the gritty close-ups, we
                examine the film’s aesthetic appeal.
              </h1>
            </div>
          </div>
          <div className='flex flex-col w-full text-center'>
            <div>
              <div>
                <h3 className='text-2xl'>8</h3>
                <p className='font-normal'>Out Rating of 10</p>
              </div>
            </div>
            <div>
              <img src='' alt='' />
            </div>
            <div>
              <img src='' alt='' />
            </div>
            <div>
              <h3 className='text-2xl font-bold'>95%</h3>
              <p className='font-normal'>Recommended Audiences Approval</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
