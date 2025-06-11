 async function getPosts() {
            
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const users = await response.json();
                const result = users.map(user => {
                    return `
                    <div class="user-card">
                        <h2>${user.name}</h2>
                        
                        <div class="section">
                            <div class="section-title">
                                 Personal Info
                            </div>
                            <p>Username: ${user.username}</p>
                            <p>Email: ${user.email}</p>
                            <p>Phone: ${user.phone}</p>
                            <p>Website: ${user.website}</p>
                        </div>
                        
                        <div class="section">
                            <div class="section-title">
                                 Address
                            </div>
                            <p>${user.address.street}, ${user.address.suite}</p>
                            <p>${user.address.city}, ${user.address.zipcode}</p>
                            <div class="geo">
                                <p>Lat: ${user.address.geo.lat}</p>
                                <p>Lng: ${user.address.geo.lng}</p>
                            </div>
                        </div>
                        
                        <div class="section">
                            <div class="section-title">
                                 Company
                            </div>
                            <p>${user.company.name}</p>
                            <p class="company-phrase">${user.company.catchPhrase}</p>
                            <p>Business: ${user.company.bs}</p>
                        </div>
                    </div>
                    `;
                }).join('');
                
                document.querySelector(".posts").innerHTML = result;
            
            }
        getPosts();