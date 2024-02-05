/** @format */

export default function LandingPage() {
  return (
    <>
      <div className='container mx-auto'>
        <div className='flex flex-col flex-wrap gap-4 p-4 text-left bg-[#BA181B] md:flex-row'>
          <div className='md:w-full'>
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
        <div className='flex flex-col items-stretch gap-4 p-4  bg-[#B1A7A6] text-black'>
          <div>
            <div>
              <p className='font-normal'>Cinematography</p>
              <h1 className='text-2xl font-bold'>
                From the grand sweeping landscapes to the gritty close-ups, we
                examine the film’s aesthetic appeal.
              </h1>
            </div>
          </div>
          <div className='flex flex-col items-stretch gap-4 text-center '>
            <div className='bg-[#A59998] rounded-xl h-[332px] p-8 flex flex-col justify-center'>
              <div>
                <h3 className='pb-2 text-5xl font-bold'>8</h3>
                <p className='font-normal'>Out Rating of 10</p>
              </div>
            </div>
            <div className=' flex justify-center bg-[#A59998] p-8 rounded-xl'>
              <img
                src='/images/Humaaans2.png'
                alt=''
                width={400}
                height={300}
              />
            </div>
            <div className='flex justify-center p-8 bg-[#A59998] rounded-xl'>
              <img
                src='/images/Humaaans1.png'
                alt=''
                width={400}
                height={300}
              />
            </div>
            <div className='bg-[#A59998] h-[332px] p-8 flex flex-col justify-center rounded-xl'>
              <h3 className='pb-2 text-5xl font-bold'>95%</h3>
              <p className='font-normal'>Recommended Audiences Approval</p>
            </div>
          </div>

          {/*  */}
          <div className='flex flex-col gap-4 p-4 text-black'>
            <div>
              <h1 className='text-2xl'>Double Take</h1>
            </div>
            <div>
              <p className='font-light'>
                The visual effects were breathtaking at times, borderline
                excessive at others. Did they accentuate the story or merely
                serve as sugar-coated distractions?
              </p>
            </div>
            <div className='flex flex-col gap-4 font-light'>
              <div>
                <h2 className='font-bold'>300</h2>
                <p>Explosions</p>
              </div>
              <div>
                <h2 className='font-bold'>2456</h2>
                <p>VFX frames</p>
              </div>
              <div>
                <h2 className='font-bold'>128</h2>
                <p>Aliens</p>
              </div>
            </div>
          </div>
          {/*  */}
          <div className='flex flex-col items-stretch gap-4 p-4  bg-[#B1A7A6] text-black'>
            <div></div>
            <div className='flex flex-col items-stretch gap-4 text-center '>
              <div className=' flex flex-col text-left gap-2 justify-center bg-[#A59998] p-8 rounded-xl'>
                <div className='bg-[#B1A7A6] rounded-xl mb-2'>
                  <img
                    src='/images/Humaaans2.png'
                    alt=''
                    width={400}
                    height={300}
                  />
                </div>
                <div>
                  <p>The film was 1 hour too long with not enough substance.</p>
                  <p className='pt-2'>Elon Musk</p>
                </div>
              </div>
              <div className='flex flex-col text-left gap-2 justify-center p-8 bg-[#A59998] rounded-xl'>
                <div className='bg-[#B1A7A6] rounded-xl mb-2'>
                  <img
                    src='/images/Humaaans2.png'
                    alt=''
                    width={400}
                    height={300}
                  />
                </div>
                <div>
                  <p>The film was 1 hour too long with not enough substance.</p>
                  <p className='pt-2'>Elon Musk</p>
                </div>
              </div>
              <div className='flex flex-col text-left gap-2 justify-center p-8 bg-[#A59998] rounded-xl'>
                <div className='bg-[#B1A7A6] rounded-xl mb-2'>
                  <img
                    src='/images/Humaaans2.png'
                    alt=''
                    width={400}
                    height={300}
                  />
                </div>
                <div>
                  <p>The film was 1 hour too long with not enough substance.</p>
                  <p className='pt-2'>Elon Musk</p>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          <div className='grid grid-cols-2 text-center'>
            <div>
              <div>Genres</div>
              <div className='font-normal'>
                <div>Drama</div>
                <div>Action</div>
                <div>Romance</div>
              </div>
            </div>
            <div>
              <div>Languages</div>
              <div className='font-normal'>
                <div>English</div>
                <div>Spanish</div>
                <div>French</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
