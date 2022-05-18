const query = `{
user(username: "devnishant") {
	publication {
		posts(page: 0) {
			title
			brief
			slug
		}
	}
}
}
`
fetch(`https://api.hashnode.com/`, {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json',
	},
	body: JSON.stringify({
		query,
	})
}).then(res => res.json()).then(data => {
	const blogContainer = document.getElementById('blogs_container')
	data.data.user.publication.posts.forEach(post => {
		const wrapper_link = document.createElement('a')
		wrapper_link.href = `https://devnishant.me/${post.slug}`
		wrapper_link.className = 'blog'
		const title = document.createElement('h2')
		title.innerText = post.title
		const brief = document.createElement('p')
		brief.innerText = post.brief.slice(0, 100)
		wrapper_link.appendChild(title)
		wrapper_link.appendChild(brief)
		blogContainer.appendChild(wrapper_link)
	})
})