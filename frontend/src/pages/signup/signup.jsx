import GenderCheckBox from './gender-checkbox';

const Signup = () => {
  return (
    <div className='flex flex-col items-cenrer justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
          Signup
          <span className='text-blue-700'> ChatApp</span>
        </h1>
        <form>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>FullName</span>
            </label>
            <input
              type='text'
              placeholder='John Doe'
              className='w-full input input-bordered h-10'
            />
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Username</span>
            </label>
            <input
              type='text'
              placeholder='johndoe'
              className='w-full input input-bordered h-10'
            />
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Password</span>
            </label>
            <input
              type='password'
              placeholder='enter password'
              className='w-full input input-bordered h-10'
            />
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Confirm Password</span>
            </label>
            <input
              type='password'
              placeholder='confirm password'
              className='w-full input input-bordered h-10'
            />
          </div>

          <GenderCheckBox />

          <div>
            <button className='btn btn-block btn-sm mt-2'>Sign Up</button>
          </div>

          <a
            href='#'
            className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'
          >
            Already have an account?
          </a>
        </form>
      </div>
    </div>
  );
};
export default Signup;

// import GenderCheckBox from './gender-checkbox';

// const Signup = () => {
//   return (
//     <div className='flex flex-col items-cenrer justify-center min-w-96 mx-auto'>
//       <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10'>
//         <h1 className='text-3xl font-semibold text-center text-gray-300'>
//           Signup
//           <span className='text-blue-700'> ChatApp</span>
//         </h1>
//         <form>
//           <div>
//             <label className='label p-2'>
//               <span className='text-base label-text'>FullName</span>
//             </label>
//             <input
//               type='text'
//               placeholder='John Doe'
//               className='w-full input input-bordered h-10'
//             />
//           </div>
//           <div>
//             <label className='label p-2'>
//               <span className='text-base label-text'>Username</span>
//             </label>
//             <input
//               type='text'
//               placeholder='johndoe'
//               className='w-full input input-bordered h-10'
//             />
//           </div>

//           <div>
//             <label className='label p-2'>
//               <span className='text-base label-text'>Password</span>
//             </label>
//             <input
//               type='password'
//               placeholder='enter password'
//               className='w-full input input-bordered h-10'
//             />
//           </div>
//           <div>
//             <label className='label p-2'>
//               <span className='text-base label-text'>Confirm Password</span>
//             </label>
//             <input
//               type='password'
//               placeholder='confirm password'
//               className='w-full input input-bordered h-10'
//             />
//           </div>

//           <GenderCheckBox />

//           <div>
//             <button className='btn btn-block btn-sm mt-2'>Sign Up</button>
//           </div>

//           <a
//             href='#'
//             className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'
//           >
//             Already have an account?
//           </a>
//         </form>
//       </div>
//     </div>
//   );
// };
// export default Signup;
