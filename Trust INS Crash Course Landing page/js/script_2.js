parallax();
function parallax() {
	'use strict';

	
	const targetClass = '.js-parallax-elm-box';
	
	const childClass = '.js-parallax-elm';

	
	const targets = Array.prototype.slice.call(document.querySelectorAll(targetClass),0);
	
	if(targets.length === 0) {
		return;
	}

	
	let observer = new IntersectionObserver(observerFunc, {
		root: null,
		rootMargin: '0px',
		threshold: 0
	});

	
	let winH = window.innerHeight;
	
	let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	
	let scrollBottom = scrollTop + winH;

	
	let setListener =  [];
	let settings =  [];
	targets.forEach((target,index) => {
		target.setAttribute('data-index',index);
		const child = target.querySelector(childClass);
		if(!child) {
			return;
		}
		settings.push({
			child: child,
			scrollRatio: (child.clientHeight - target.clientHeight) / (winH + target.clientHeight)
		});
		setListener.push(
			{
				target: target,
				handleEvent: function handleEvent () {
					requestAnimationFrame(parallaxFunk.bind(target));
				}
			}
		);
		requestAnimationFrame(parallaxFunk.bind(target));
		observer.observe(target);
	});
	let resizeID;
	window.addEventListener('resize', function() {
		clearTimeout(resizeID);
		resizeID = setTimeout(() => {
			winH = window.innerHeight;
			targets.forEach((target,index) => {
				if(!settings[index].child) {
					return;
				}
				settings[index].scrollRatio = (settings[index].child.clientHeight - target.clientHeight) / (winH + target.clientHeight);
			});
		}, 500);
	});

	
	window.addEventListener('scroll', function() {
		
		scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		
		scrollBottom = scrollTop + winH;
	}, {passive: true});

	
	function observerFunc(entries) {
		entries.forEach(entry => {
			
			const listener =  setListener[entry.target.getAttribute('data-index')];
			if(entry.isIntersecting) {
				
				window.addEventListener('scroll', listener, {passive: true});
			} else {
				
				window.removeEventListener('scroll', listener, {passive: true});
			}
		});
	}

	
	function parallaxFunk() {
		
		const index =  Number(this.getAttribute('data-index'));

		
		const targetPosi =  this.getBoundingClientRect().top + scrollTop;

		
		const setVal = ((scrollBottom - targetPosi) * settings[index].scrollRatio).toFixed(1);

		
		settings[index].child.style.transform = 'translate3d(0,'+ (setVal * -1) +'px,0)';
	}
}