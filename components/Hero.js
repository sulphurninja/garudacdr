function Hero(){
    return(
        <div className="hero py-32 bg-base-100">
            <div className="hero-content max-w-5xl flex-col lg:flex-row-reverse">
                <img src="https://picsum.photos/seed/picsum/500/300" className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                <h1 className="text-5xl font-bold">Change your location with a click!</h1>
                <p className="py-6">Allow Location access to change your original location. Fool your friends with a location from different country</p>
                <h1 className="">Only for entertainment purposes!</h1>
                </div>
            </div>
        </div>
    )    
}

export default Hero