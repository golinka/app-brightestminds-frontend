<template>
  <tr class="table__row">
    <td class="table__status" data-label="Status">
      <div class="table__cell">
        <Icon :name="getIconName" class="mb-2" />
        <span>{{ campaign.status }}</span>
      </div>
    </td>
    <td class="table__details" data-label="Details">
      <div class="table__cell">
        <router-link :to="{ name: 'campaign', params: { cid: campaign.id } }">
          {{ campaign.name }}
        </router-link>
        <p>{{ campaign.created | moment("LLL") }}</p>
        <p>{{ campaign.from_name }}</p>
        <span>({{ campaign.from_email }})</span>
      </div>
    </td>
    <td class="table__stat" data-label="Prospects">
      <div class="table__cell">
        <Icon name="prospects-icon" class="mb-2" />
        <span>{{ campaign.stats.prospects }}</span>
      </div>
    </td>
    <td class="table__stat" data-label="Delivered">
      <div class="table__cell">
        <Icon name="delivered-icon" class="mb-2" />
        <span>{{ campaign.stats.delivery }}</span>
      </div>
    </td>
    <td class="table__stat" data-label="Opened">
      <div class="table__cell">
        <Icon name="opened-icon" class="mb-2" />
        <span>{{ campaign.stats.opened }}</span>
      </div>
    </td>
    <td class="table__stat" data-label="Replied">
      <div class="table__cell">
        <Icon name="replied-icon" class="mb-2" />
        <span>{{ campaign.stats.replied }}</span>
      </div>
    </td>
    <td class="table__interest" data-label="Interest">
      <div class="table__cell text-center">
        <div>
          <Icon name="interested-icon" class="mb-2" />
          <span>{{ campaign.stats.interested }}</span>
        </div>
        <div>
          <Icon name="maybe_later-icon" class="mb-2" />
          <span>{{ campaign.stats.maybe_later }}</span>
        </div>
        <div>
          <Icon name="not_interested-icon" class="mb-2" />
          <span>{{ campaign.stats.not_interested }}</span>
        </div>
      </div>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    campaign: {
      type: Object,
      required: true
    }
  },
  computed: {
    getIconName () {
      return this.campaign.status.toLowerCase() + '-icon'
    }
  }
}
</script>
