import { Navigate } from "react-router-dom";
export default function Login(){
    return(
        <div className="w-screen flex text-black ">
            
            <div className="bg-[#9587fc] w-full h-screen relative hidden md:flex m-auto  justify-center items-center ">
            <div className="bg-[#b8adfc] w-3/4 h-3/4 flex ">
            <div className=" w-9/12 h-3/4  flex-col justify-center items-center m-auto ">
                <div className="flex flex-col text-start">
                <div >
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className=" h-[78px] w-[78px] -ml-2 text-white " width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643z" clip-rule="evenodd"></path></svg>
                </div>
               
                <div >
                  <h1 className="text-6xl font-bold mb-4 mt-4 text-[#475569] ">Unlock</h1>
                  <h1 className="text-6xl font-bold mb-4 text-[#475569]">Your Project</h1>
                  <h1 className="text-6xl font-bold mb-4 ">Performance</h1>
                  <h2 className="text-2xl mt-6">You will never know everything.</h2>
                  <h2 className="text-2xl">But you will know more</h2>
                </div>
                </div>
            </div>
            </div>
            </div>

            <div className="bg-white w-full px-20 h-screen relative flex justify-center items-center ">
            <div className="h-4/5 w-3/5 py-10  flex-col  text-center">
                <div className="logo ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" class="h-10 w-10 2xl:w-14 2xl:h-14 text-primary" className="text-[#846cf9] size-14 text-start"><g fill="currentColor" clip-path="url(#logo_svg__a)"><path d="M0 18.383c0-1.505 1.194-2.724 2.667-2.724H18v2.043c0 1.504-1.194 2.723-2.667 2.723H0zM9.333 32c-1.472 0-2.666-1.22-2.666-2.723v-8.17h2c1.472 0 2.666 1.219 2.666 2.723V32zM0 0h18.667C26.03 0 32 6.097 32 13.617H0zM16 32c2.101 0 4.182-.423 6.123-1.244a16 16 0 0 0 5.19-3.542 16.4 16.4 0 0 0 3.47-5.302A16.6 16.6 0 0 0 32 15.66h-9.159c0 .918-.177 1.826-.52 2.674a7 7 0 0 1-1.484 2.267 6.8 6.8 0 0 1-2.219 1.514c-.83.351-1.72.532-2.618.532z"></path></g><defs><clipPath id="logo_svg__a"><path fill="#fff" d="M0 0h32v32H0z"></path></clipPath></defs></svg>
                </div>
                <div className="title">
                    <h1 className=" md:text-3xl text-2xl  font-bold text-black text-start mt-4">Hey, Hello 👋</h1>
                </div>
                <div className="sub-title text-start mt-2">
                    <p className="text-xl font-thin">Enter the information you entered while registering.</p>
                </div>
                <div className="form mt-4 ">
                    <div className="mt-5 flex-col">
                    <label htmlFor="Email" className="relative block">
                                <input type="text" className="bg-transparent px-2 border border-opacity-50 outline-none focus:border-black focus:text-black transition duration-200 w-full p-2 rounded-lg block peer" />
                                <span className="text-xl text-gray-500 text-opacity-80 absolute left-3 top-5 -translate-y-1/2 transition-transform duration-20 peer-focus:-translate-y-[2.2rem] peer-focus:-translate-x-1 peer-focus:scale-75  peer-focus:text-black bg-white peer-focus:bg-white peer-focus:px-1 peer-focus:border-3 input-text">Email</span>
                    </label>  
                    </div>

                    <div className="mt-4 flex-col w-full relative">
                         <label htmlFor="Email" className="relative block">
                                <input type="text" className="bg-transparent px-2 border border-opacity-50 outline-none focus:border-black focus:text-black transition duration-200 w-full p-2 rounded-lg block peer" />
                                <span className="text-xl text-gray-500 text-opacity-80 absolute left-3 top-5 -translate-y-1/2 transition-transform duration-20 peer-focus:-translate-y-[2.2rem] peer-focus:-translate-x-1 peer-focus:scale-75  peer-focus:text-black bg-white peer-focus:bg-white peer-focus:px-0.7 peer-focus:border-1 input-text">Password</span>
                    </label>
                        
                    </div>
                    <div className="flex mt-4 justify-between">
                        <div>
                        <input type="checkbox" id="remember-me" name="remember-me" value={false} className="h-4 w-4 border-none cursor-pointer rounded-lg " />
                        <label for="remember-me" className="mb-1 cursor-pointer"> Remember me</label>
                        </div>
                       
                        <p className="text-[#846cf9]">Forget Password?</p>
                    </div>
                    <div className="mt-4">
                        <button className="bg-[#846cf9] border w-full p-2 rounded-lg block cursor-pointer">Sign In</button>
                    </div>
                </div>
                <div className="login-logos mt-6 flex justify-center items-center ">
                    <div className="flex h-5 w-5 flex justify-center items-center mt-4  ">
                    <button >
                        <svg viewBox="-0.5 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" className="size-6 mr-4 cursor-pointer"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>Google-color</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Color-" transform="translate(-401.000000, -860.000000)"> <g id="Google" transform="translate(401.000000, 860.000000)"> <path d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24" id="Fill-1" fill="#FBBC05"> </path> <path d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333" id="Fill-2" fill="#EB4335"> </path> <path d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667" id="Fill-3" fill="#34A853"> </path> <path d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24" id="Fill-4" fill="#4285F4"> </path> </g> </g> </g> </g></svg>
                    </button>
                    <div>
                        <svg viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" className="size-6 mr-4 cursor-pointer"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>github [#142]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="#000000"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]"> </path> </g> </g> </g> </g></svg>
                    </div>
                    <div>
                        <svg fill="#1577f6" height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-143 145 512 512" xml:space="preserve" stroke="#1577f6" className="size-6 mr-4 cursor-pointer"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M169.5,357.6l-2.9,38.3h-39.3 v133H77.7v-133H51.2v-38.3h26.5v-25.7c0-11.3,0.3-28.8,8.5-39.7c8.7-11.5,20.6-19.3,41.1-19.3c33.4,0,47.4,4.8,47.4,4.8l-6.6,39.2 c0,0-11-3.2-21.3-3.2c-10.3,0-19.5,3.7-19.5,14v29.9H169.5z"></path> </g></svg>
                    </div>
                    <div>
                        <svg viewBox="0 -4 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" className="size-6 mr-4 cursor-pointer "><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>Twitter-color</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Color-" transform="translate(-300.000000, -164.000000)" fill="#00AAEC"> <path d="M348,168.735283 C346.236309,169.538462 344.337383,170.081618 342.345483,170.324305 C344.379644,169.076201 345.940482,167.097147 346.675823,164.739617 C344.771263,165.895269 342.666667,166.736006 340.418384,167.18671 C338.626519,165.224991 336.065504,164 333.231203,164 C327.796443,164 323.387216,168.521488 323.387216,174.097508 C323.387216,174.88913 323.471738,175.657638 323.640782,176.397255 C315.456242,175.975442 308.201444,171.959552 303.341433,165.843265 C302.493397,167.339834 302.008804,169.076201 302.008804,170.925244 C302.008804,174.426869 303.747139,177.518238 306.389857,179.329722 C304.778306,179.280607 303.256911,178.821235 301.9271,178.070061 L301.9271,178.194294 C301.9271,183.08848 305.322064,187.17082 309.8299,188.095341 C309.004402,188.33225 308.133826,188.450704 307.235077,188.450704 C306.601162,188.450704 305.981335,188.390033 305.381229,188.271578 C306.634971,192.28169 310.269414,195.2026 314.580032,195.280607 C311.210424,197.99061 306.961789,199.605634 302.349709,199.605634 C301.555203,199.605634 300.769149,199.559408 300,199.466956 C304.358514,202.327194 309.53689,204 315.095615,204 C333.211481,204 343.114633,188.615385 343.114633,175.270495 C343.114633,174.831347 343.106181,174.392199 343.089276,173.961719 C345.013559,172.537378 346.684275,170.760563 348,168.735283" id="Twitter"> </path> </g> </g> </g></svg>
                    </div>
                    </div>
                
                </div>
                <div className="signup-option mt-6"> 
                    <p>Don't have an account? Sign Up</p>
                </div>
            </div>
            </div>
        </div>
    )
}