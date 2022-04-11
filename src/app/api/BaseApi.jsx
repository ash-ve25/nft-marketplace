import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const BaseApi = createApi({
  reducerPath: "BaseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://marketplace-backend-nft.herokuapp.com/api/v1/",
  }),
  tagTypes: ["Collections", "Atrributes", "Item"],
  endpoints: (builder) => ({
    addCollection: builder.mutation({
      query: (data) => ({
        url: "collection",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Collections"],
    }),

    addMintViaJson: builder.mutation({
      query: ({ creator_id, data }) => ({
        url: `collection/updatemintaddress/${creator_id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Collections"],
    }),

    getAllCollection: builder.query({
      query: () => "collection",
      providesTags: ["Collections"],
    }),

    deleteCollection: builder.mutation({
      query: (id) => ({
        url: `collection/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Collections"],
    }),

    updateCollection: builder.mutation({
      query: ({ creator_id, ...patch }) => ({
        url: `collection/${creator_id}`,
        method: "PATCH",
        body: patch,
      }),
      invalidatesTags: ["Collections"],
    }),
    // atrribute
    addAtrribute: builder.mutation({
      query: (data) => ({
        url: "attribute",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Atrributes"],
    }),
    getAllAtribute: builder.query({
      query: (id) => `attribute?creator_id=${id}`,
      providesTags: ["Atrributes"],
    }),
    updateAtribute: builder.mutation({
      query: ({ creator_id, ...patch }) => ({
        url: `attribute/${creator_id}`,
        method: "PATCH",
        body: patch,
      }),
      invalidatesTags: ["Atrributes"],
    }),
    deleteAtribute: builder.mutation({
      query: (id) => ({
        url: `attribute/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Atrributes"],
    }),

    // item
    addItem: builder.mutation({
      query: (data) => ({
        url: "item",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Item"],
    }),
    getAllItem: builder.query({
      query: (id) => `item?creator_id=${id}`,
      providesTags: ["Item"],
    }),
    getFilteredItem: builder.query({
      query: ({ id, filter }) => {
        if (filter.length === 0) {
          return `item?creator_id=${id}&values=[]`;
        } else {
          // get the items from array and make it into a signle string with comma separated values
          let temp = "";
          filter.forEach((item) => {
            if (!temp.length) {
              temp = `"${item}"`;
            } else {
              temp = temp + `,"${item}"`;
            }
          });
          return `item?creator_id=${id}&values=[${temp}]`;
        }
      },
      // query: ({ id, filter }) => `item?creator_id=${id}&values=${filter}`,
      providesTags: ["Item"],
    }),
    getAllItemWithoutId: builder.query({
      query: () => "item",
      providesTags: ["Item"],
    }),
    getAllItemByMint: builder.query({
      query: (id) => `item?mint_address=${id}`,
      providesTags: ["Item"],
    }),
    deleteItem: builder.mutation({
      query: (id) => ({
        url: `item/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Item"],
    }),
    updateItem: builder.mutation({
      query: ({ _id, ...patch }) => ({
        url: `item/${_id}`,
        method: "PATCH",
        body: patch,
      }),
      invalidatesTags: ["Item"],
    }),

    //blockchain

    blockchain: builder.mutation({
      query: (creator_id) => ({
        url: `blockchain?creator_id=${creator_id}`,
        method: "PATCH",
        body: creator_id,
      }),
      invalidatesTags: ["Atrributes"],
    }),
  }),
});

export const {
  useAddCollectionMutation,
  useGetAllCollectionQuery,
  useAddMintViaJsonMutation,
  useDeleteCollectionMutation,
  useUpdateCollectionMutation,
  // atrribute
  useAddAtrributeMutation,
  useGetAllAtributeQuery,
  useUpdateAtributeMutation,
  useDeleteAtributeMutation,
  // item
  useAddItemMutation,
  useGetAllItemWithoutIdQuery,
  useGetAllItemQuery,
  useDeleteItemMutation,
  useUpdateItemMutation,
  useGetFilteredItemQuery,
  useGetAllItemByMintQuery,
  //
  useBlockchainMutation,
} = BaseApi;
