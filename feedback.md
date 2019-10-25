Good:

- App is small and deals with routes and layout
- You have a lot of good method names
- Components that just display data, like summary
- Css seperated


Can be improved:

- Classnames have to be capitalized
- Try to use meaningful names so movie instead of val
- Make component that renders a list of movies and reuse it
- Consider using prop desctructuring if you're passing a lot of props
- presentational components without state can be turned into functions
- Make request to api for specific movie
- Make folders so css and component are together

```javascript
<Summary
	imagecontent={movie.image}
	desc={movie.desc}
	title={movie.title}
	director={movie.director}
	stars={movie.stars}
	score={movie.userscore}
	movieid={movie.id}
/>
```

```javascript
<Summary {...movie} />
```
