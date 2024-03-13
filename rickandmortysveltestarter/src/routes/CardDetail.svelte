<script>
	export let character;
</script>
<div class="card mb-3">
	<div class="row g-0">
		<div class="col-md-6">
			<img src="{character.image}" class="img-fluid rounded-end" alt="{character.name}" />
		</div>
		<div class="col-md-6">
			<div class="card-body">
				<h5 class="card-title">{character.name}</h5>
				<dl class="card-text dl-horizontal">
                    <dt >
                       Status
                    </dt>
                    <dd >
                        {character.status} 
                    </dd>
                    <dt >
                        Species
                    </dt>
                    <dd >
                        {character.species} 
                    </dd>
                    <dt>
                       Gender
                    </dt>
                    <dd>
                        {character.gender} 
                    </dd>
                    <dt>
                       Origin
                    </dt>
                    <dd>
                        {character?.origin?.name ?? ""} 
                    </dd>
                </dl>
				
			</div>
            
		</div>
        <div class="card-footer">
            <div class="text-center">
                <a href="/characters" class="btn btn-primary">Go Back</a>
            </div>
        </div>
	</div>
</div>
