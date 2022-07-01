import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { Layout, ModuleDetail, QueryResult } from '../components'

/**
 * GET_MODULE_AND_PARENT_TRACK gql query to retrieve a specific module and its parent track,
 * both needed for the ModuleDetail component
 */
export const GET_MODULE_AND_PARENT_TRACK = gql`
  query getModuleAndParentTrack($moduleId: ID!, $trackId: ID!) {
    module(id: $moduleId) {
      id
      title
      videoUrl
      content
    }
    track(id: $trackId) {
      id
      title
      modules {
        id
        title
        durationInSeconds
      }
    }
  }
`

/**
 * Module page fetches both parent track and module's data from the gql query GET_MODULE_AND_PARENT_TRACK
 * and feeds them to the Module detail component
 */
const Module = ({ moduleId, trackId }) => {
  const { loading, error, data } = useQuery(GET_MODULE_AND_PARENT_TRACK, {
    variables: {
      moduleId,
      trackId,
    },
  })

  return (
    <Layout fullWidth>
      <QueryResult loading={loading} error={error} data={data}>
        <ModuleDetail module={data?.module} track={data?.track} />
      </QueryResult>
    </Layout>
  )
}

export default Module
