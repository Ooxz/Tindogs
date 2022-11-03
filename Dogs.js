class Dogs {
  constructor(data) {
    Object.assign(this, data);

	
  }

  setMatchStatus(boolean) {
	let { hasBeenLiked, hasBeenSwiped} = this;
	hasBeenLiked = boolean
	hasBeenSwiped = true
}

  getDogsHtml() {
    const { name, avatar, age, bio} = this;
    return `
		<div class="dog-card">
		<img class="dog-img" src="${avatar}">
		<div class="dog-name">${name}</div>
		<div class="dog-age">${age}</div>
		<div class="dog-bio">${bio}</div>
		</div>
		`
  }
}

export default Dogs;
