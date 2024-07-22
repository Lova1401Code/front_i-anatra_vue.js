<template>
  <div class="pd-ltr-20 xs-pd-20-10">
    <div class="min-height-200px">
      <div class="page-header">
        <div class="row">
          <div class="col-md-12 col-sm-12">
            <div class="title">
              <h4>Profile</h4>
            </div>
            <nav aria-label="breadcrumb" role="navigation">
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                <li class="breadcrumb-item active" aria-current="page">
                  Profile
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-8 col-lg-8 col-md-8 col-sm-12 mb-30">
          <div class="card-box height-100-p overflow-hidden">
            <div class="profile-tab height-100-p">
              <div class="tab height-100-p">
                <ul class="nav nav-tabs customtab" role="tablist">
                  <li class="nav-item">
                    <a
                      class="nav-link active"
                      data-toggle="tab"
                      href="#timeline"
                      role="tab"
                      >Parent</a
                    >
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      data-toggle="tab"
                      href="#tasks"
                      role="tab"
                      >Paiement</a
                    >
                  </li>
                </ul>
                <div class="tab-content">
                  <!-- Timeline Tab start -->
                  <div
                    class="tab-pane fade show active"
                    id="timeline"
                    role="tabpanel"
                  >
                    <div class="pd-20">
                      <div class="profile-timeline">
                        <div class="timeline-month">
                          <h5>August, 2020</h5>
                        </div>
                        <div class="profile-timeline-list">
                          <ul>
                            <li>
                              <div class="date"></div>
                              <div class="task-name">
                                <i class="ion-android-person"></i> Nom Père :
                              </div>
                              <p>
                                {{ this.pere_nom }}
                              </p>
                            </li>
                            <li>
                              <div class="date"></div>
                              <div class="task-name">
                                <i class="ion-android-person"></i> Prénom(s)
                                Père :
                              </div>
                              <p>
                                {{ this.pere_prenom }}
                              </p>
                            </li>
                            <li>
                              <div class="date"></div>
                              <div class="task-name">
                                <i class="ion-android-person"></i> Contact Père
                                :
                              </div>
                              <p>
                                {{ this.pere_contact }}
                              </p>
                            </li>
                            <li>
                              <div class="date"></div>
                              <div class="task-name">
                                <i class="ion-android-person"></i> Profession
                                Père :
                              </div>
                              <p>
                                {{ this.profession_pere }}
                              </p>
                            </li>
                            <li>
                              <div class="date"></div>
                              <div class="task-name">
                                <i class="ion-android-person"></i> Nom Mère :
                              </div>
                              <p>
                                {{ this.mere_nom }}
                              </p>
                            </li>
                            <li>
                              <div class="date"></div>
                              <div class="task-name">
                                <i class="ion-android-person"></i> Prénom(s)
                                Mère :
                              </div>
                              <p>
                                {{ this.mere_nom }}
                              </p>
                            </li>
                            <li>
                              <div class="date"></div>
                              <div class="task-name">
                                <i class="ion-android-person"></i> profession
                                mère :
                              </div>
                              <p>
                                {{ this.profession_mere }}
                              </p>
                            </li>
                            <li>
                              <div class="date"></div>
                              <div class="task-name">
                                <i class="ion-android-person"></i>Contact mere :
                              </div>
                              <p>
                                {{ this.mere_contact }}
                              </p>
                            </li>
                            <li>
                              <div class="date"></div>
                              <div class="task-name">
                                <i class="ion-android-person"></i>email parent :
                              </div>
                              <p>
                                {{ this.emailParent }}
                              </p>
                            </li>
                            <li>
                              <div class="date"></div>
                              <div class="task-name">
                                <i class="ion-android-person"></i>Tuteur nom :
                              </div>
                              <p>
                                {{ this.tuteur_nom }}
                              </p>
                            </li>
                            <li>
                              <div class="date"></div>
                              <div class="task-name">
                                <i class="ion-android-person"></i>tuteur
                                prénom(s) :
                              </div>
                              <p>
                                {{ this.tuteur_prenom }}
                              </p>
                            </li>
                            <li>
                              <div class="date"></div>
                              <div class="task-name">
                                <i class="ion-android-person"></i>tuteur contact
                                :
                              </div>
                              <p>
                                {{ this.tuteur_contact }}
                              </p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- Timeline Tab End -->
                  <!-- Tasks Tab start -->
                  <div class="tab-pane fade" id="tasks" role="tabpanel">
                    <div class="pd-20 profile-task-wrap">
                      <div class="container pd-0">
                        <!-- Open Task start -->
                        <div class="task-title row align-items-center">
                          <div class="col-md-8 col-sm-12">
                            <h5>Open Tasks (4 Left)</h5>
                          </div>
                        </div>
                        <div class="profile-task-list pb-30">
                          <ul>
                            <li>
                              <div class="custom-control custom-checkbox mb-5">
                                <input
                                  type="checkbox"
                                  class="custom-control-input"
                                  id="task-1"
                                />
                                <label
                                  class="custom-control-label"
                                  for="task-1"
                                ></label>
                              </div>
                              <div class="task-type">Email</div>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Id ea earum.
                              <div class="task-assign">
                                Assigned to Ferdinand M.
                                <div class="due-date">
                                  due date <span>22 February 2019</span>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div class="custom-control custom-checkbox mb-5">
                                <input
                                  type="checkbox"
                                  class="custom-control-input"
                                  id="task-2"
                                />
                                <label
                                  class="custom-control-label"
                                  for="task-2"
                                ></label>
                              </div>
                              <div class="task-type">Email</div>
                              Lorem ipsum dolor sit amet.
                              <div class="task-assign">
                                Assigned to Ferdinand M.
                                <div class="due-date">
                                  due date <span>22 February 2019</span>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div class="custom-control custom-checkbox mb-5">
                                <input
                                  type="checkbox"
                                  class="custom-control-input"
                                  id="task-3"
                                />
                                <label
                                  class="custom-control-label"
                                  for="task-3"
                                ></label>
                              </div>
                              <div class="task-type">Email</div>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit.
                              <div class="task-assign">
                                Assigned to Ferdinand M.
                                <div class="due-date">
                                  due date <span>22 February 2019</span>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div class="custom-control custom-checkbox mb-5">
                                <input
                                  type="checkbox"
                                  class="custom-control-input"
                                  id="task-4"
                                />
                                <label
                                  class="custom-control-label"
                                  for="task-4"
                                ></label>
                              </div>
                              <div class="task-type">Email</div>
                              Lorem ipsum dolor sit amet. Id ea earum.
                              <div class="task-assign">
                                Assigned to Ferdinand M.
                                <div class="due-date">
                                  due date <span>22 February 2019</span>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <!-- Open Task End -->
                        <!-- Close Task start -->

                        <div class="profile-task-list close-tasks">
                          <ul>
                            <li>
                              <div class="custom-control custom-checkbox mb-5">
                                <input
                                  type="checkbox"
                                  class="custom-control-input"
                                  id="task-close-1"
                                  checked=""
                                  disabled=""
                                />
                                <label
                                  class="custom-control-label"
                                  for="task-close-1"
                                ></label>
                              </div>
                              <div class="task-type">Email</div>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Id ea earum.
                              <div class="task-assign">
                                Assigned to Ferdinand M.
                                <div class="due-date">
                                  due date <span>22 February 2018</span>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div class="custom-control custom-checkbox mb-5">
                                <input
                                  type="checkbox"
                                  class="custom-control-input"
                                  id="task-close-2"
                                  checked=""
                                  disabled=""
                                />
                                <label
                                  class="custom-control-label"
                                  for="task-close-2"
                                ></label>
                              </div>
                              <div class="task-type">Email</div>
                              Lorem ipsum dolor sit amet.
                              <div class="task-assign">
                                Assigned to Ferdinand M.
                                <div class="due-date">
                                  due date <span>22 February 2018</span>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div class="custom-control custom-checkbox mb-5">
                                <input
                                  type="checkbox"
                                  class="custom-control-input"
                                  id="task-close-3"
                                  checked=""
                                  disabled=""
                                />
                                <label
                                  class="custom-control-label"
                                  for="task-close-3"
                                ></label>
                              </div>
                              <div class="task-type">Email</div>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit.
                              <div class="task-assign">
                                Assigned to Ferdinand M.
                                <div class="due-date">
                                  due date <span>22 February 2018</span>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div class="custom-control custom-checkbox mb-5">
                                <input
                                  type="checkbox"
                                  class="custom-control-input"
                                  id="task-close-4"
                                  checked=""
                                  disabled=""
                                />
                                <label
                                  class="custom-control-label"
                                  for="task-close-4"
                                ></label>
                              </div>
                              <div class="task-type">Email</div>
                              Lorem ipsum dolor sit amet. Id ea earum.
                              <div class="task-assign">
                                Assigned to Ferdinand M.
                                <div class="due-date">
                                  due date <span>22 February 2018</span>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <!-- Close Task start -->
                        <!-- add task popup start -->

                        <!-- add task popup End -->
                      </div>
                    </div>
                  </div>
                  <!-- Tasks Tab End -->
                  <!-- Setting Tab start -->
                  <!-- Setting Tab End -->
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 mb-30">
          <div class="pd-20 card-box height-100-p">
            <div class="profile-photo">
              <a
                href="modal"
                data-toggle="modal"
                data-target="#modal"
                class="edit-avatar"
                ><i class="fa fa-pencil"></i
              ></a>
              <img
                src="/assets/vendors/images/photo1.jpg"
                alt=""
                class="avatar-photo"
              />
              <div
                class="modal fade"
                id="modal"
                tabindex="-1"
                role="dialog"
                aria-labelledby="modalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-dialog-centered" role="document">
                  <div class="modal-content">
                    <div class="modal-body pd-5">
                      <div class="img-container">
                        <img
                          id="image"
                          src="/assets/vendors/images/photo2.jpg"
                          alt="Picture"
                        />
                      </div>
                    </div>
                    <div class="modal-footer">
                      <input
                        type="submit"
                        value="Update"
                        class="btn btn-primary"
                      />
                      <button
                        type="button"
                        class="btn btn-default"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h5 class="text-center h5 mb-0">{{ this.nom }}</h5>
            <p class="text-center text-muted font-14">
              {{ this.prenom }}
            </p>
            <div class="profile-info">
              <h5 class="mb-20 h5 text-blue">
                Information de l'eleve en attente de validation
              </h5>
              <ul>
                <li>
                  <span>Nom:</span>
                  {{ this.nom }}
                </li>
                <li>
                  <span>Prénom(s):</span>
                  {{ this.prenom }}
                </li>
                <li>
                  <span>Classe Actuel:</span>
                  {{ this.matricule }}
                </li>
                <li>
                  <span>Date de Naissance:</span>
                  {{ this.date_naissance }}
                </li>
                <li>
                  <button
                    type="button"
                    @click="validerEleve"
                    class="btn btn-info btn-lg btn-block"
                  >
                    Block level button
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "eleveDetails",
  methods: {
    afficheEleve(idEleve) {
      axios
        .get("http://127.0.0.1:8000/api/eleves-attentes/" + idEleve)
        .then((res) => {
          console.log(res.data);
          this.idE = res.data.id;
          this.matricule = res.data.matricule;
          this.nom = res.data.nom;
          this.prenom = res.data.prenom;
          this.email = res.data.email;
          this.date_naissance = res.data.date_naissance;
          this.photo_profil = res.data.photo_profil;
          this.pere_nom = res.data.pere_nom;
          this.pere_prenom = res.data.pere_prenom;
          this.profession_pere = res.data.profession_pere;
          this.pere_contact = res.data.pere_contact;
          this.mere_nom = res.data.mere_nom;
          this.mere_prenom = res.data.mere_prenom;
          this.profession_mere = res.data.profession_mere;
          this.mere_contact = res.data.mere_contact;
          this.emailParent = res.data.emailParent;
          this.tuteur_nom = res.data.tuteur_nom;
          this.tuteur_prenom = res.data.tuteur_prenom;
          this.tuteur_contact = res.data.tuteur_contact;
          this.created_at = res.data.created_at;
        });
    },
    validerEleve() {
      axios
        .post(
          "http://127.0.0.1:8000/api/eleves-attentes/" + this.id + "/validate"
        )
        .then((res) => {
          console.log(res);
        });
    },
  },
  data() {
    return {
      idE: "",
      matricule: "",
      nom: "",
      prenom: "",
      email: "",
      date_naissance: "",
      photo_profil: "",
      pere_nom: "",
      pere_prenom: "",
      profession_pere: "",
      pere_contact: "",
      mere_nom: "",
      mere_prenom: "",
      profession_mere: "",
      mere_contact: "",
      emailParent: "",
      tuteur_nom: "",
      tuteur_prenom: "",
      tuteur_contact: "",
      created_at: "",
      id: this.$route.params.idEleve,
    };
  },
  mounted() {
    this.afficheEleve(this.id);
  },
};
</script>
<style></style>