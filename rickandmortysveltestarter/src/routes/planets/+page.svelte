<script>
</script>

<div class="row">
	<div class="col-sm-12 col-md-6">
		<h4 class="text-center">Insert Planet</h4>
		<form method="POST" action="?/addPlanet" > <!-- Add enhance -->
			<div class="row">
				<div class="col-sm-12 mb-3">
					<label for="name" class="form-label">Name</label>
					<input
						type="text"
						id="name"
						class="form-control"
						placeholder="Name"
						name="name"
					
					/>
					<!-- Add the bind value in the input-->
				</div>
			</div>
			<div class="row">
				<div class="col-sm-12 mb-3">
					<label for="image" class="form-label">Image Link</label>
					<input
						type="text"
						id="imageLink"
						class="form-control"
						placeholder="URL Image"
						name="imageLink"
						
					/>
					<!-- Add the bind value in the input-->
				</div>
			</div>
			<div class="row mt-3">
				<div class="col">
					<button class="btn btn-primary float-end" type="submit">Save</button>
				</div>
			</div>
		</form>
		<!-- Add if form?.success -->
			<div class="alert alert-success alert-dismissible fade show mt-3" role="alert">
				Planet Saved!
				<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
			</div>
		<!-- End if -->
		<!-- if form?.errors -->
		<div class="alert alert-danger alert-dismissible fade show mt-3" role="alert">
			<!--  form?.errors -->
			<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
		</div>
		<!-- End if -->
	</div>

	<div class="col-sm-12 col-md-6 text-center">
		<h4>Preview</h4>
		
	</div>
</div>
<div class="row justify-content-center mt-5">
	<h4 class="text-center">Planets</h4>
	
</div>
