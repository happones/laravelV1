<template>
    <section>
        <b-field grouped group-multiline>
            <b-select v-model="perPage" @input="getData">
                <option value="5">5 por página</option>
                <option value="10">10 por página</option>
                <option value="15">15 por página</option>
                <option value="20">20 por página</option>
            </b-select>
            <div class="control">
                <router-link class="button is-success" :to="{name: 'create-user'}">
                    Nuevo Registro
                </router-link>
            </div>
            <div class="control">
                <b-field>
                    <b-input
                            placeholder="Busqueda"
                            icon="search"
                            v-model="query"
                            type="search"
                            @input="getData">
                    </b-input>
                </b-field>
            </div>
        </b-field>
        <b-table
                :data="data"
                paginated
                :loading="loading"
                :per-page="perPage"
                backend-pagination
                default-sort="id"
                :default-sort-direction="order"
                backend-sorting
                :current-page="currentPage"
                :total="total"
                @sort="sorted"
                @page-change="pageChange">

            <template slot-scope="props">
                <b-table-column label="Acciones">
                    <div class="buttons are-small">
                        <router-link :to="{ name: 'show-user', params: { id: props.row.id } }" class="button is-info">
                            <b-icon icon="eye"></b-icon>
                        </router-link>
                        <router-link :to="{ name: 'edit-user', params: { id: props.row.id } }" class="button is-warning">
                            <b-icon icon="edit"></b-icon>
                        </router-link>
                        <a class="button is-danger" @click="deleteData(props.row.id)">
                            <b-icon icon="trash"></b-icon>
                        </a>
                    </div>
                </b-table-column>

                <b-table-column field="id" label="ID" width="40" sortable numeric>
                    {{ props.row.id }}
                </b-table-column>

                <b-table-column field="name" label="Nombre" sortable>
                    {{ props.row.name }}
                </b-table-column>

                <b-table-column field="email" label="Correo" sortable>
                    {{ props.row.email }}
                </b-table-column>

                <b-table-column field="avatar" label="Avatar" sortable>
                   <figure class="image is-64x64">
                       <img :src="props.row.avatar" :alt="props.row.name">
                   </figure>
                </b-table-column>

                <b-table-column field="birthday" label="Cumpleaños" sortable>
                    <span v-if="props.row.birthday">
                        {{ props.row.birthday | date('LL') }}
                    </span>
                    <span v-else>
                        Sin Fecha
                    </span>
                </b-table-column>
            </template>
        </b-table>
    </section>
</template>

<script>
    export default {
        name: 'Index',
        data() {
            return {
                data: [],
                currentPage: 1,
                perPage: 10,
                total: 0,
                order: 'desc',
                field: 'id',
                loading: false,
                query: null,
            }
        },
        created() {
            this.prepareComponent()
        },
        methods: {
            prepareComponent() {
                this.getData()
            },
            sorted(field, order) {
                this.field = field;
                this.order = order;
                this.getData()
            },
            pageChange(page) {
                this.currentPage = page
                this.getData()
            },
            getData() {
                this.loading = true;
                this.$http.get('user', {
                    params: {
                        perPage: this.perPage,
                        page: this.currentPage,
                        field: this.field,
                        sort: this.order,
                        query: this.query
                    }
                }).then(({data}) => {
                    this.loading = false;
                    this.data = data.data || [];
                    this.total = data.total;
                }, ({response}) => {
                    let data = response.data;
                    this.loading = false;
                    this.$notify.danger(error.response.data.message);
                })
            },
            deleteData(id) {
                this.$dialog.confirm({
                    confirmText: 'Si, eliminar',
                    cancelText: 'No, cancelar',
                    message: '¿Deseas eliminar este registro?',
                    onConfirm: () => {
                        this.loading = true;
                        this.$http.delete(`user/${id}`)
                            .then(({data}) => {
                                this.loading = false;
                                this.$notify.success(data.message);
                                this.getData();
                            }, ({response}) => {
                                let data = response.data;
                                this.loading = false;
                                this.$notify.danger(data.message);
                            })
                    }
                })
            }
        }
    }
</script>
