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
		<div class="dog-infos">${name}, ${age}</div>
		<div class="dog-bio">${bio}</div>
		</div>
		<img class="dog-img" src="${avatar}">
		`
  }
}

export default Dogs;
