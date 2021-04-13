import * as React from "react"




function FeaturedServices({ children }) {
    return (
    <section className="bg-gray-100">
        <div className="container mx-auto px-10 py-10">
            <div className="flex  md:flex-row flex-col md:space-x-5 md:space-y-0 space-y-5">
            {children}
            </div>
        </div>
    </section>
    )
}

export default FeaturedServices