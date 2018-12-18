import Route from '@ember/routing/route';

export default Route.extend({
	model() {
		return [
			{ 
				name: 'Marie Curie',
				age: 22
			},
			{ 
				name: 'Mae Jemison',
				age: 24
			},
			{ 
				name: 'Albert Hofmann',
				age: 26
			},
		];
	}
});
