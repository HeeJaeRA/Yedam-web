<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
		<div class="container-fluid">
			<router-link class="navbar-brand" aria-current="page" to="/">게시판</router-link>
			<button
				class="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarNavDropdown"
				aria-controls="navbarNavDropdown"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarNavDropdown">
				<ul class="navbar-nav">
					<li class="nav-item">
						<router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
					</li>
					<li class="nav-item">
						<router-link class="nav-link active" aria-current="page" to="/boardList">전체 조회</router-link>
					</li>
					<li class="nav-item">
						<router-link class="nav-link active" aria-current="page" to="/boardForm">글 등록</router-link>
					</li>
				</ul>
				<!-- <form class="d-flex" role="search">
					<input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
					<button class="btn btn-outline-success" type="submit">Search</button>
				</form> -->
			</div>
		</div>
	</nav>
</template>
