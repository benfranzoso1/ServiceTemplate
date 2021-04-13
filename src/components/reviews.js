import * as React from "react"
import { Link } from "gatsby"


function Reviews(props) {
    return (
        <section className="reviews">
            <div className="container mx-auto px-10 py-10">
                <div className="flex flex-col justify-between">
                    <div className="text-center xl:px-60 lg:px-40">
                        <h2>{props.reviewsHeading}</h2>
                        </div>


                        <ul id="reviews" className="flex m-0 gap-5">

                            <li id="review" className="p-5  rounded-md shadow flex-col">
                                <figure className="flex flex-col items-center">
                                <div id="review-rating" className="inline-flex flex-row">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 20 20" fill="#FBBF24">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 20 20" fill="#FBBF24">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 20 20" fill="#FBBF24">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 20 20" fill="#FBBF24">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 20 20" fill="#FBBF24">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>    
                                    </div>

                                    <blockquote cite="" id="review-content" className="m-0 my-5 text-center">
                                        <p>After a rocky start on the communication front, we got our date and our project went forward.  Peter and the crew were easy to work with.  They got down to business, even working until dark, one day, to get through that stage of the project.  They finished well within the promised time frame, and the patio looks great!  Getting the project estimated and scheduled was a challenge, but because everyone is struggling with the shutdown challenges, I've given 5 stars anyway.</p>
                                    </blockquote>
                                    <figcaption className="flex items-center space-x-3">
                                    <div className="rounded-full flex justify-center items-center itrelative h-14 w-14 bg-gray-50 shadow">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="#F43939" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 21.2 29.1">

<g>
	<path class="st0" d="M2.9,13.7l5.3,2.6c1,0.5,0.9,2-0.2,2.3L2.2,20c-0.7,0.2-1.4-0.3-1.5-1c-0.2-1.6,0-3.1,0.5-4.5   C1.4,13.7,2.2,13.4,2.9,13.7z"/>
	<path class="st0" d="M5,24.6l3.9-4.4c0.8-0.8,2.1-0.3,2.1,0.9L10.8,27c0,0.7-0.7,1.3-1.4,1.2c-1.5-0.3-3-0.8-4.2-1.7   C4.6,26,4.5,25.1,5,24.6z"/>
	<path class="st0" d="M14.3,18.8l5.6,1.8c0.7,0.2,1,1,0.7,1.7c-0.7,1.4-1.6,2.6-2.8,3.6c-0.6,0.5-1.4,0.3-1.8-0.3l-3.1-5   C12.3,19.6,13.2,18.4,14.3,18.8z"/>
	<path class="st0" d="M20,15.2l-5.6,1.6c-1.1,0.3-2-0.9-1.3-1.8l3.3-4.9c0.4-0.6,1.3-0.7,1.8-0.2c1.1,1,2,2.2,2.7,3.7   C21,14.2,20.7,15,20,15.2z"/>
	<path class="st0" d="M6.8,1.5c-1,0.3-2,0.6-2.9,1.1C3.2,2.9,3,3.7,3.4,4.3l5.5,9.6c0.6,1.1,2.3,0.6,2.3-0.6v-11   c0-0.7-0.6-1.3-1.3-1.2C8.8,1.1,7.8,1.3,6.8,1.5z"/>
</g>
</svg>
                                    </div>
                                    <span className="font-semibold">Author Name<br></br>
                                    <Link to="#"><cite>Yelp</cite></Link></span>
                                 </figcaption>
                                </figure>
                            </li>

                

                        </ul>

                    </div>
                </div>
        </section>
        
        
    
    )
}

export default Reviews