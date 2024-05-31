document.addEventListener('DOMContentLoaded', () => {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const jobsContainer = document.getElementById('jobs-container');

            data.forEach(job => {
                const jobElement = document.createElement('div');
                jobElement.classList.add('job');

                const leftDiv = document.createElement('div');
                leftDiv.classList.add('left');

                const logoDiv = document.createElement('div');
                const logoImg = document.createElement('img');
                logoImg.src = job.logo;
                logoDiv.appendChild(logoImg);

                const infoDiv = document.createElement('div');
                const companyP = document.createElement('p');
                companyP.textContent = job.company;

                if (job.new) {
                    const newSpan = document.createElement('span');
                    newSpan.textContent = 'New!';
                    newSpan.classList.add('new');
                    companyP.appendChild(newSpan);
                }

                if (job.featured) {
                    const featuredSpan = document.createElement('span');
                    featuredSpan.textContent = 'Featured';
                    featuredSpan.classList.add('featured');
                    companyP.appendChild(featuredSpan);
                }

                const positionH3 = document.createElement('h3');
                positionH3.textContent = job.position;

                const detailsSpan = document.createElement('span');
                detailsSpan.textContent = `${job.postedAt} • ${job.contract} • ${job.location}`;

                infoDiv.appendChild(companyP);
                infoDiv.appendChild(positionH3);
                infoDiv.appendChild(detailsSpan);

                leftDiv.appendChild(logoDiv);
                leftDiv.appendChild(infoDiv);

                const rightDiv = document.createElement('div');
                rightDiv.classList.add('right');

                const languages = [...job.languages, job.role, job.level];
                languages.forEach(lang => {
                    const langSpan = document.createElement('span');
                    langSpan.textContent = lang;
                    rightDiv.appendChild(langSpan);
                });

                jobElement.appendChild(leftDiv);
                jobElement.appendChild(rightDiv);

                jobsContainer.appendChild(jobElement);
            });
        })
        .catch(error => console.error('Error fetching job data:', error));
});
