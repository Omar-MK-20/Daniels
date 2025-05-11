window.addEventListener("scroll", function(){
    const navbar = this.document.getElementById("navbar-example");
    const headerHeight = this.document.getElementById("home").offsetHeight;
    // console.log(headerHeight)
    // console.log(this.window.scrollY)
    if (this.window.scrollY >= headerHeight) {
        navbar.classList.add("my-nav-scroll")
    }
    else {
        navbar.classList.remove("my-nav-scroll")
    }

})

// ================================================


// imparted from (https://github.com/bfintal/Counter-Up2)

const counterUp = window.counterUp.default

const callback = entries => {
	entries.forEach( entry => {
		const el = entry.target
		if ( entry.isIntersecting && ! el.classList.contains( 'is-visible' ) ) {
			counterUp( el, {
				duration: 2000,
				delay: 16,
			} )
			el.classList.add( 'is-visible' )
		}
	} )
}

const IO1 = new IntersectionObserver( callback, { threshold: 1 } )

const el1 = document.querySelector( '.counter1' )
IO1.observe( el1 )
// =====
const IO2 = new IntersectionObserver( callback, { threshold: 1 } )

const el2 = document.querySelector( '.counter2' )
IO2.observe( el2 )
// =====
const IO3 = new IntersectionObserver( callback, { threshold: 1 } )

const el3 = document.querySelector( '.counter3' )
IO3.observe( el3 )
// =====
const IO4 = new IntersectionObserver( callback, { threshold: 1 } )

const el4 = document.querySelector( '.counter4' )
IO4.observe( el4 )