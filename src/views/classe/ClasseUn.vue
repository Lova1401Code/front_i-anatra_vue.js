<template>
  <h1>Classe 6eme</h1>
  <div class="pd-20 card-box mb-30">
    <div class="clearfix mb-20">
      <div class="pull-left">
        <h4 class="text-blue h4">Responsive table</h4>
        <p>
          Responsive tables allow tables to be scrolled horizontally with ease.
          Make any table responsive across all viewports by wrapping a
          <code>.table .table-responsive</code> Or, pick a maximum breakpoint
          with which to have a responsive table up to by
          using<code>.table-responsive{-sm|-md|-lg|-xl}</code>.
        </p>
      </div>
      <div class="pull-right">
        <a
          href="#responsive-table"
          class="btn btn-primary btn-sm scroll-click"
          rel="content-y"
          data-toggle="collapse"
          role="button"
          ><i class="fa fa-code"></i> Source Code</a
        >
      </div>
    </div>
    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
            <th scope="col">Tag</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td><span class="badge badge-primary">Primary</span></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="collapse collapse-box" id="responsive-table">
      <div class="code-box">
        <div class="clearfix">
          <a
            href="javascript:;"
            class="btn btn-primary btn-sm code-copy pull-left"
            data-clipboard-target="#responsive-table-code"
            ><i class="fa fa-clipboard"></i> Copy Code</a
          >
          <a
            href="#responsive-table"
            class="btn btn-primary btn-sm pull-right"
            rel="content-y"
            data-toggle="collapse"
            role="button"
            ><i class="fa fa-eye-slash"></i> Hide Code</a
          >
        </div>
        <pre>
            <code class="xml copy-pre" id="responsive-table-code">
                <div class="table-responsive">
                    <table class="table table-striped">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        </tr>
                    </tbody>
                    </table>
                </div>
			</code>
        </pre>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "ClasseUn",
  data() {
    return {
      eleves: [],
    };
  },
  methods: {
    getClasse() {
      axios
        .get("http://127.0.0.1:8000/api/classes")
        .then((result) => {
          console.log(result);
          this.eleves = result.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getClasse();
  },
};
</script>
<style></style>